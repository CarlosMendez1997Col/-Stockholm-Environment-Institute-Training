// Solutions of the exercices 1 and 2 in Google Earth Engine 

// Developed by MSc Carlos Mendez

// Second Solution of exercise One.

////////////////////////////////////////////////////////////////////////////// Set and configure Basemas  ///////////////////////////////////////////////////////////////////////////////////////

var iconChange = 
[
  {
    // Change map saturation.
        stylers: [{ gamma: 0.2,
                    //lightness: -80,        
                    invert_lightness: true,
                    //saturation: 0,
                 }]
  },
    // Change label properties.
  {elementType: 'labels', stylers: [{visibility: 'on', color: '#000055'}]},
  // Change road properties.
  {featureType: 'road', elementType: 'geometry', stylers: [{visibility: 'on', color: '#000055'}]},
  // Change road labels.
  {featureType: 'road', elementType: 'labels', stylers: [{visibility: 'on', color: '#000055'}]},
  // Change icon properties.
  {elementType: 'labels.icon', stylers: [{visibility: 'off', color: '#000055'}]},
  // Change POI options.
  {featureType: 'poi', elementType: 'all', stylers: [{visibility: 'off', color: '#000055'}]},
  
  {featureType: 'administrative', elementType: 'geometry.fill', stylers: [{visibility: 'off', color: '#000055'}]},
  
  {featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{visibility: 'off', color: '#000055'}]}
];


////////////////////////////////////////////////////////////////////////////// Palette and Symbology  ///////////////////////////////////////////////////////////////////////////////////////


var runoff260basins = ['CCCCFF', '9999F7', '6666F0', '3333E8', '0000E0'];


////////////////////////////////////////////////////////////////////////////// Set Style Images and Hillshade  ///////////////////////////////////////////////////////////////////////////////////////

// path .shp
//https://code.earthengine.google.com/?asset=projects/ee-carlosmendez1997/assets/AOI_ext

var AOI = ee.FeatureCollection("projects/ee-carlosmendez1997/assets/AOI_ext");

var hand30_100 = ee.ImageCollection("users/gena/global-hand/hand-100")
var demALOS = ee.Image("JAXA/ALOS/AW3D30/V2_2")
demALOS = demALOS.select('AVE_DSM').clip(AOI)
var paletteHand = ['grey', 'white'];
var vis = {min: -50.0, max: 3000.0, palette: paletteHand}

// add styled
var utils = require('users/gena/packages:utils')

function hillshade(image) {
  var weight = 0.7
  var extrusion = 5
  var sunAzimuth = 315
  var sunElevation = 35
  var elevation = 45
  var contrast = 0.1
  var brightness = 0
  var saturation = 0.85
  var gamma = 0.1

  return utils.hillshadeRGB(image, demALOS, weight, extrusion, sunAzimuth, sunElevation, contrast, brightness, saturation, gamma)
}

////////////////////////////////////////////////////////////////////////////// Main Script of SEI-Runoff  ///////////////////////////////////////////////////////////////////////////////////////////

// path .shp
// https://code.earthengine.google.com/?asset=projects/ee-carlosmendez1997/assets/WEAP_Catchment

var data = ee.FeatureCollection("projects/ee-carlosmendez1997/assets/WEAP_Catchment");

var runoff = data.select('avg_80_20');
var runoff_branch = data.select('Branch');
  
var visParams = 
{
  min:0.50, 
  max:2162925096.79,
  palette: runoff260basins
};

var image = runoff.reduceToImage
({
  properties: ['avg_80_20'],
  reducer: ee.Reducer.first()
});

////////////////////////////////////////////////////////////////////////////// Create and define Labels (titles, texts and pictures with logos  ///////////////////////////////////////////////////////////////////////////////////////

var title = ui.Label('WebMap Monthly Average Runoff 260 River Basins', {
  stretch: 'horizontal', textAlign: 'center', fontWeight: 'bold', fontSize: '20px'});

var header = ui.Label('WebMap created in Google Earth Engine(GEE)', {
  stretch: 'horizontal', textAlign: 'center', fontWeight: 'bold', fontSize: '14px'});

var linkPanel2 = ui.Panel([ui.Label('Credits and Acknowledgements', {
  stretch: 'horizontal', textAlign: 'center',fontWeight: 'bold', fontSize: '10px'})]);

var author = ui.Label('MSc Carlos Mendez',{
  stretch: 'horizontal', textAlign: 'center', fontSize: '11px', fontWeight: 'bold'});

var accounts = ui.Label('Official Accounts',{
  stretch: 'horizontal', textAlign: 'center', fontSize: '11px'});

var link_github = ui.Label('GitHub', {
  fontSize: '16px', stretch: 'horizontal', textAlign: 'center'},'https://github.com/CarlosMendez1997Col');
  
var chart_accounts = ui.Chart(
    [['<img src="data:image/png;base64,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" alt="" />']],
    'Table', {allowHtml: true});
chart_accounts.style().set({width: '220px',height: '100px'});    

var link_website = ui.Label('Website', {
  fontSize: '16px', stretch: 'horizontal', textAlign: 'center'},'https://carlosmendez1997col.github.io/PortfolioDev.io/');
  
var link_linkedin = ui.Label('LinkedIn', {
  fontSize: '16px', stretch: 'horizontal', textAlign: 'center'},'https://co.linkedin.com/in/carlos-mendez-oficialpage/es');  

////////////////////////////////////////////////////////////////////////////// Set and create a panel ///////////////////////////////////////////////////////////////////////////////////////

var map1 = ui.Map();
map1.add(ui.Label('Basins lv2 to lv9',{position: 'bottom-center'}));
map1.addLayer(hillshade(hand30_100.mosaic().visualize(vis)), {}, 'DEM Base Hillshade', false, 0.15)
map1.addLayer(image, visParams, 'Original Runoff of 260 Basins', true, 0.9);
map1.addLayer(runoff_branch, {}, 'Original 260 Basins', true, 0.5);
map1.centerObject(runoff,6); 
map1.setOptions('iconChange', {'iconChange': iconChange});


var mapPanel = ui.Panel([],
    ui.Panel.Layout.Flow('horizontal'), {stretch: 'both'});

mapPanel.add(ui.Panel([map1], null, {stretch: 'both'}))

////////////////////////////////////////////////////////////////////////////// Load Symbology and Legend from Layers  ///////////////////////////////////////////////////////////////////////////////////////

var layerslegends = ui.Label('Legend of Runoff:', {
  stretch: 'horizontal', textAlign: 'center','font-size': '12px'});

var legendInfo = {
  'Original Runoff (260 Basins)': {palette: runoff260basins, labels: ['0.50 to 31628583.28','31628583.28 to 135374970.74','135374970.74 to 368868773.39',
                                                                      '368868773.39 to 870168965.12','870168965.12 to 2162925096.79']},
                 };
 

var legendPanel = ui.Panel({style: {position: 'top-center',padding: '8px 15px'}});
    
var layerSelector = ui.Select({
      items: Object.keys(legendInfo),
      value: Object.keys(legendInfo)[0],
      style: {margin: '8px 10px'}});
    
var updateLegend = function(selectedLayer) 
{
  
  legendPanel.clear(); 
  var info = legendInfo[selectedLayer];

  legendPanel.add(ui.Label({
                            //value: selectedLayer,
                            style: {fontWeight: 'bold', fontSize: '14px', margin: '0px 70px', padding: '0'}
                          }));

  for (var i = 0; i < info.palette.length; i++) 
  {
        var colorBox = ui.Label({
          style: {backgroundColor: info.palette[i],padding: '10px',margin: '0px 0px'}
                              });
                              
  var label = ui.Label({
        value: info.labels[i],
          style: {margin: '0px 0px'}
                      });
                      
        legendPanel.add(ui.Panel({
          widgets: [colorBox, label],
          layout: ui.Panel.Layout.Flow('horizontal')
                                }));
  }
};
    
layerSelector.onChange(updateLegend);
updateLegend(layerSelector.getValue());

mapPanel.add(ui.Panel([header, layerslegends, layerSelector, legendPanel,linkPanel2, author, accounts, chart_accounts, link_github, link_website, 
                       link_linkedin], null, {width: '300px', position: 'bottom-right'}));
  
ui.root.widgets().reset([title, mapPanel]);
ui.root.setLayout(ui.Panel.Layout.Flow('vertical'));

