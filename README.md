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

```HTML
https://github.com/CarlosMendez1997Col/Monitoring-Agrometeorological-Resources/releases
```
  
# Packages and libraries used in exercise 1 and 2

```Python
from arcgis.map.renderers import (ClassBreaksRenderer, ClassBreakInfo, SizeInfoVisualVariable)
from arcgis.map.symbols import SimpleLineSymbolEsriSLS, SimpleFillSymbolEsriSFS
import numpy as np
import pandas as pd
import math
import os
import time

from datetime import datetime as dt
from IPython.display import Image, HTML
from copy import deepcopy

from arcgis.gis import GIS
from arcgis.features import FeatureLayer, FeatureLayerCollection
from arcgis.geometry import SpatialReference

import arcpy
from arcpy.sa import*
from arcpy.ia import*
from arcpy import env
from arcgis.raster.functions import *

# connect to GIS
from arcgis.gis import GIS
from arcgis.geometry import SpatialReference
```

```JavaScript
ee.FeatureCollection("projects/ee-carlosmendez1997/assets/AOI_ext")
ee.ImageCollection("users/gena/global-hand/hand-100")
ee.FeatureCollection("projects/ee-carlosmendez1997/assets/WEAP_Catchment");
ee.FeatureCollection("projects/ee-carlosmendez1997/assets/AOI_ejercicio2")
ee.ImageCollection("JRC/GSW1_4/MonthlyHistory")
```


## Conflict of Interest.

The author declare that there is no conflict of interest in the publication of this data and have approved it for publication.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. 

## MIT License

Copyright (c) 2025 Carlos Mendez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
