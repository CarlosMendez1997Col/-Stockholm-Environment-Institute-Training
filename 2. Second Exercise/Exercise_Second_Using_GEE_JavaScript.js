// Solutions of the exercice 2 in Google Earth Engine 

// Developed by MSc Carlos Mendez

// Import the AOI proposal by the SEI


// path.shp
//https://code.earthengine.google.com/?asset=projects/ee-carlosmendez1997/assets/AOI_ejercicio2

var AOI2 = ee.FeatureCollection("projects/ee-carlosmendez1997/assets/AOI_ejercicio2").geometry();

// Area of AOI2 in ArcGIS 253305733.075 square meters

// create an empty ee.List where the data will be stored, then export as (.csv)

var data_series = ee.List([]);
var data_series_number = ee.List([]);

// Import the Monthly Water History from Global Surface Water Explorer (GSWE)
var GSWE_2021 = ee.ImageCollection("JRC/GSW1_4/MonthlyHistory")

// The exercise requieres a minimun data of 12 months, in this case we choose 2021.
var filtered_2021 = GSWE_2021.filter(ee.Filter.eq('year',2021));
print(filtered_2021)

// Create a list to get the yyyy-mm in 2021  
var ID_GSWE = filtered_2021.reduceColumns(ee.Reducer.toList(), ["system:index"]).get("list").getInfo();

// Creation of a for looping to get the following information (Master Script)

for (var i = 0; i < ID_GSWE.length; i++) 
{

//1. Load all Images in 2021
  var image = ee.Image("JRC/GSW1_4/MonthlyHistory" + "/" + ID_GSWE[i]); // Call the dataset
  var GSWE_date = image.select('water').clip(AOI2); //select 'water' band and clip by AOI

//2. Calculate the minimum and maximum values of water per month (2021-01 to 2021-12)

  var minMax_value = GSWE_date.reduceRegion({reducer: ee.Reducer.minMax(),geometry: AOI2,scale: 30, maxPixels: 1e9 }); //Get the Min and Max values
  //print('Minimum and Maximum values of GSWE: ' + ID_GSWE[i].substring(0,7), minMax_value); //print the info

//3. Visualize and add each Image in MapViewer
  
  var visualization = {bands: ['water'],min: 0.0,max: 2.0,palette: ['ffffff', 'fffcb8', '0905ff']};// set symbology


//Map.addLayer(GSWE_date, visualization, "GSWE_" + ID_GSWE[i].substring(1,7), false, 0.9); // Visualize Images

//4. Filter only meters of water upper than 0(include null and NaN values)
  
  var water_meters = GSWE_date.gt(0).selfMask().rename('watermeters')

//5. Store Images with positive water meters
  
//Map.addLayer(water_meters, {palette: 'blue'}, "Water Detected: " + ID_GSWE[i].substring(0,7), false, 0.5);

//6. Calcule area in square meters
  
  var areaImage = water_meters.multiply(ee.Image.pixelArea())
  var area = areaImage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: AOI2,
  scale: 30,
  maxPixels: 1e10
  })
  
  print('The total area in m2 of water by: ' + ID_GSWE[i].substring(0,7), area); //print the area
  
  var data_series = data_series.add(area)
  data_series_number = data_series_number.add(ee.Number(data_series.get(i)))

//7. Convert Images to vectors

  // Reduce the image to vectors.
  var vectors = water_meters.reduceToVectors({
  reducer: ee.Reducer.countEvery(), // Specifies how to aggregate pixel values within each segment.
  geometry: AOI2,
  scale: 30,                       // The nominal scale in meters of the projection to work in.
  maxPixels: 1e8                   // The maximum number of pixels to reduce per region.
  });
  
  Map.addLayer(vectors, {palette: ['white', 'black']}, "Water in vector: " + ID_GSWE[i].substring(0,7), false, 0.5);
  
  
//8. Export data to Google Drive

// If you want to export the vectors file, please delete the characters (/* and */)

/*
  // Export Vectors to Google Drive
  Export.table.toDrive({
  collection: vectors,
  description: "GSWE_" + ID_GSWE[i].substring(0,7),
  fileFormat: 'SHP',
  folder: 'GEE_GSWE_SEI',
  });
*/  
  
}

print('time series in format (yyyy-mm):' , ID_GSWE);
print('data series values: ', data_series);
print(data_series_number)

Map.addLayer(AOI2, {}, 'AOI', false)
Map.centerObject(AOI2)
