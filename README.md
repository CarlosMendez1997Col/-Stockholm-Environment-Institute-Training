# Stockholm Environment Institute Exercises

Exercises and technical test proposed by the Stockholm Environment Institute (SEI) for the position of Research Associate-Water Program.

## Master urls to use and install this repository

HTTPS
```html
https://github.com/CarlosMendez1997Col/-Stockholm-Environment-Institute-Training.git
```
GitHub CLI
```html
gh repo clone CarlosMendez1997Col/-Stockholm-Environment-Institute-Training
```

## Description

Exercises One and Two proposed by the Stockholm Environment Institute (SEI) for the position of Research Associate-Water Program. Repository builded with the following tools:

* `Python`
* `Javascript`
* `ArcGIS Pro`
* `ArcGIS Online`
* `ArcGIS Dashboards`
* `ArcGIS API For Python`
* `Google Earth Engine`

# Instructions to resolve exercices

## Exercise One

### Exercise One (First Solution)

* Download and open in ArcGIS Pro the file `Exercise_One_Using_ArcGIS_API.ipynb` located in folder (1. First Exercise)
* Download the ZIP files `WEAP_Catchment.shp.zip` located in folder (4. Data and files) and file `WEAP_Escorrentia_completo.csv` located in folder (3. Examples and Test).
* Import the files using ArcGIS API For Python and run the script. 
* Connect your ArcGIS Account and publish the data in ArcGIS Online.
* Created a ArcGIS Dashboard to build a WebMap/Application to visualize dynamical data.

The application developed is available at:
```html
<!-- WebMap Short Url-->
https://udistritalfjc.maps.arcgis.com/home/item.html?id=429c3f9e12dc4dc2a2c88b224acde995
```
### Exercise One (Second Solution)

* Open the following url to clone and use the repository hosted in GEE with the exercices [link](https://code.earthengine.google.com/?accept_repo=users/carlosmendez/ExercicesSEI)
* Download and open in Google Earth Engine the file `Exercise_One_Using_GEE_JavaScript.js` located in folder (1. First Exercise).
* Run the JavaScript script in GEE. In case you are unable to load .shp files in GEE, please import the files  `WEAP_Catchment.shp.zip` and `WEAP_Escorrentia_completo.csv`manually in GEE.
* Visualize the WebMap/Application.

The application developed is available at:
```html
<!-- WebMap Short Url-->
https://ee-carlosmendez.projects.earthengine.app/view/first-exercise-sei
```

### Exercise Two

* Download and open the first part of solution in Google Earth Engine, run the script the `Exercise_Second_Using_GEE_JavaScript.js` located in folder (2. Second Exercise).
* Run the JavaScript script in GEE. In case you are unable to load .shp files in GEE, please import the file `AOI_ejercicio2.zip` located in folder (4. Data and files) manually in GEE.
* Export and download the Images/Rasters generated in GEE.
* The script in GEE calculated the area of water in square meters. However, you can to calculate it using the field calculator in ArcGIS pro.
* Open ArcGIS Pro and import the files `Images_Second_Exercise.zip` generated previously in GEE.
* Download the file `ExampleExercise2.csv` located in folder (3. Examples and Test). Then, import the file in ArcGIS Pro using the script `Exercise_Two_Using_ArcGIS_API.ipynb` located in folder (2. Second Exercise).

## Versions and releases

Version `1.0`

```JavaScript
https://github.com/CarlosMendez1997Col/Monitoring-Agrometeorological-Resources/releases
```
  
## External packages and repositories of GEE

```JavaScript
require("users/aazuspan/snazzy:styles");
require('users/gena/packages:style');
require('users/gena/packages:text');
require('users/gena/packages:utils');
```

## External Basemaps

```JavaScript
var MultiBrand = "https://snazzymaps.com/style/20053/multi-brand-network"
var MidNight = "https://snazzymaps.com/style/2/midnight-commander"
var GeoMap = "https://snazzymaps.com/style/48477/geomap"
var AImap = "https://snazzymaps.com/style/283414/ai-map"
var AccessCall = "https://snazzymaps.com/style/10448/accesscall"
var MutedBlue = "https://snazzymaps.com/style/83/muted-blue"
var Outrun = "https://snazzymaps.com/style/122898/outrun"
var Cobalt = "https://snazzymaps.com/style/30/cobalt"
```

## External Images and ImageCollections

```JavaScript
ee.ImageCollection("users/gena/global-hand/hand-100")
ee.Image("JAXA/ALOS/AW3D30/V2_2")
```

## Main ImageCollections and Datasets

```JavaScript

ee.FeatureCollection('FAO/GAUL_SIMPLIFIED_500m/2015/level1');

// A1.Precipitation and Rainfall
ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY').select(['precipitation'])
                 
// B2. Wind Speed
ee.ImageCollection('NASA/FLDAS/NOAH01/C/GL/M/V001').select(['Wind_f_tavg'])

// C3. Surface Air Temperature (SAT)
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['temperature_2m'])
                            
// D4. Runoff

// Surface Runoff
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['surface_runoff_sum'])
// Groundwater Runoff
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['sub_surface_runoff_sum'])

// E5. Evaporation and Evapotranspiration
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['total_evaporation_sum'])

// F6. Solar Radiation
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['surface_net_solar_radiation_sum'])

// G7. Soil Moisture (In construction)

// H8. Relative Humidity (In construction)

// I9. Soil Temperature (In construction)

// J10 Soil Water Storage (SWS) (0-7cm), (7-28cm), (28-100cm), (100-289cm)

ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['volumetric_soil_water_layer_1'])
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['volumetric_soil_water_layer_2'])
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['volumetric_soil_water_layer_3'])
ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR').select(['volumetric_soil_water_layer_4'])

// K11. Agrometeorological Index (In construction)
```


## Credits and repository of data

The original Images, ImageCollection and FeatureCollections used in this project, are available at:

- [CHIRPS Daily](https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRPS_DAILY) Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final) 
- [FLDAS:](https://developers.google.com/earth-engine/datasets/catalog/NASA_FLDAS_NOAH01_C_GL_M_V001?hl=es-419#description)Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System
- [ERA5](https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_LAND_DAILY_AGGR) Land Daily Aggregated - ECMWF Climate Reanalysis

## Conflict of Interest.

The author declare that there is no conflict of interest in the publication of this data and have approved it for publication.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. 

## MIT License

Copyright (c) 2025 Carlos Mendez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
