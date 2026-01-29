TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frameDisplayTime": 1700,
  "class": "LivePanorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
  "adjacentPanoramas": [
   {
    "panorama": {
     "class": "Panorama",
     "hfovMin": 60,
     "hfov": 360,
     "id": "panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
     "adjacentPanoramas": [
      {
       "panorama": {
        "class": "Panorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
          "class": "AdjacentPanorama",
          "backwardYaw": -75.61,
          "yaw": 104.76,
          "distance": 1
         },
         {
          "panorama": {
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "id": "panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
             "class": "AdjacentPanorama",
             "backwardYaw": 32.29,
             "yaw": -75.72,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_t.jpg",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 465.25,
             "x": 555.78,
             "angle": 274.18,
             "map": {
              "class": "Map",
              "fieldOfViewOverlayInsideOpacity": 0.24,
              "id": "map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D",
              "fieldOfViewOverlayInsideColor": "#0066CC",
              "initialZoomFactor": 1,
              "height": 1815,
              "fieldOfViewOverlayOutsideColor": "#000000",
              "minimumZoomFactor": 0.5,
              "width": 3474,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 835,
                 "class": "ImageResourceLevel",
                 "width": 1600,
                 "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D.png"
                },
                {
                 "height": 417,
                 "class": "ImageResourceLevel",
                 "width": 800,
                 "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_lq.png",
                 "grayscale": true
                }
               ]
              },
              "thumbnailUrl": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_t.png",
              "label": "Gerard Floorplan",
              "maximumZoomFactor": 1.2,
              "overlays": [
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F738CD76_F64E_D8EB_41C4_774E9F2FA6D5",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 960.89,
                 "height": 90,
                 "x": 1673.71,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_0_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 1)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 960.89,
                 "x": 1673.71,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_0.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F6B92760_F64F_68E7_41E5_21C4E3A96AF1",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 1300.25,
                 "height": 90,
                 "x": 1991.25,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_1_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 0)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 1300.25,
                 "x": 1991.25,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_1.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F65730F0_F64F_29E6_41C7_B9AE21500671",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 495.46,
                 "height": 90,
                 "x": 1772.87,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_2_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 8)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 495.46,
                 "x": 1772.87,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_2.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F648DD7B_F64F_58DA_41EB_20BAE31BBDE2",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 448,
                 "height": 90,
                 "x": 1215.31,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_3_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 9)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 448,
                 "x": 1215.31,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_3.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F1E68853_F64F_382A_41AE_B6B2936A8F43",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 770.69,
                 "height": 90,
                 "x": 1219.28,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_4_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 10)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 770.69,
                 "x": 1219.28,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_4.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F6DCFD3F_F64E_F85A_41CB_773F3BB4B8EB",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 976.54,
                 "height": 90,
                 "x": 1226.98,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_5_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 2)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 976.54,
                 "x": 1226.98,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_5.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F65B89EB_F651_5BFA_41E8_0A8176C88861",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 1164.97,
                 "height": 90,
                 "x": 540.98,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_6_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 3)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 1164.97,
                 "x": 540.98,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_6.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F6F14545_F651_2829_41AE_4E111F5A4A68",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 420.25,
                 "height": 90,
                 "x": 510.78,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_7_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 4)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 420.25,
                 "x": 510.78,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_7.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F66ABD24_F651_F86E_41D5_44A38930ADAD",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 746.33,
                 "height": 90,
                 "x": 830.34,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_8_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 6)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 746.33,
                 "x": 830.34,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_8.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F6BDA3C3_F651_6829_41AF_E4007AC10D07",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 778.05,
                 "height": 90,
                 "x": 688.2,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_9_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 7)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 778.05,
                 "x": 688.2,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_9.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F631EC4D_F652_D83E_41D2_F27BEA4E0303",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 1148.47,
                 "height": 90,
                 "x": 827.04,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_10_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 5)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 1148.47,
                 "x": 827.04,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_10.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F6A42F78_F653_58E7_41E8_64A59616D8C9",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 790.32,
                 "height": 90,
                 "x": 2370.8,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_11_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 11)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 790.32,
                 "x": 2370.8,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_11.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F64CD185_F653_2829_41B4_2F22CFCD45F3",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 532.01,
                 "height": 90,
                 "x": 2375.96,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_12_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 12)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 532.01,
                 "x": 2375.96,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_12.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F72F5F82_F653_D82A_41E0_C0BEBEB4C87C",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 1249.32,
                 "height": 90,
                 "x": 2353.03,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_13_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 13)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 1249.32,
                 "x": 2353.03,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_13.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F66F2398_F653_2827_41D2_BBB95A9ACEE6",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 974.43,
                 "height": 90,
                 "x": 2523.18,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_14_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 14)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 974.43,
                 "x": 2523.18,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_14.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F6028B4F_F653_783A_41D1_3EE2EDAE441C",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 1228.76,
                 "height": 90,
                 "x": 2838.93,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_15_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 15)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 1228.76,
                 "x": 2838.93,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_15.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               },
               {
                "class": "AreaHotspotMapOverlay",
                "id": "overlay_F6829F29_F653_3879_41C7_BBB43F9D4048",
                "map": {
                 "offsetY": 0,
                 "class": "HotspotMapOverlayMap",
                 "width": 90,
                 "y": 505.11,
                 "height": 90,
                 "x": 2831.06,
                 "offsetX": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_16_map.gif"
                   }
                  ]
                 }
                },
                "data": {
                 "label": "Image"
                },
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 16)"
                 }
                ],
                "image": {
                 "class": "HotspotMapOverlayImage",
                 "y": 505.11,
                 "x": 2831.06,
                 "width": 90,
                 "height": 90,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 41,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_HS_16.png"
                   }
                  ]
                 }
                },
                "rollOverDisplay": false,
                "useHandCursor": true
               }
              ],
              "scaleMode": "fit_inside",
              "fieldOfViewOverlayOutsideOpacity": 0,
              "fieldOfViewOverlayRadiusScale": 0.15
             }
            }
           ],
           "label": "Master Closet",
           "vfov": 180,
           "hfovMax": 120,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_11488E78_076C_BBEF_4186_7BDA554010DC",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964, this.camera_184B51EB_072C_C8E0_418B_3AA35561A8F6); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.24,
                 "yaw": -75.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 29,
                    "class": "ImageResourceLevel",
                    "width": 16,
                    "url": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -20.39
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -75.72,
                 "hfov": 10.24,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 369,
                    "class": "ImageResourceLevel",
                    "width": 203,
                    "url": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -20.39
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62.jpeg"
               }
              ]
             }
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -75.72,
          "yaw": 32.29,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 1209.97,
          "x": 585.98,
          "angle": -16.95,
          "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
         }
        ],
        "label": "Master Bedroom",
        "vfov": 180,
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_128DF981_076D_7921_4199_257C9E93676B",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.15,
              "yaw": 79.42,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 16,
                 "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.98
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 79.42,
              "hfov": 9.15,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 185,
                 "class": "ImageResourceLevel",
                 "width": 193,
                 "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -27.98
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_103B8B34_076D_5967_418D_8072374C4E58",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62, this.camera_19EE81C1_072C_C921_4191_C20B120E33CE); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.13,
              "yaw": 32.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -23.69
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 32.29,
              "hfov": 12.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 247,
                 "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -23.69
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_10199D79_076F_59E1_4192_B5EBD3073BBA",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E, this.camera_19C511B6_072C_C960_415C_75C6C008C816); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.61,
              "yaw": 104.76,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 24,
                 "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -18.25
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 104.76,
              "hfov": 8.61,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 169,
                 "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -18.25
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964.jpeg"
            }
           ]
          }
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 104.76,
       "yaw": -75.61,
       "distance": 1
      },
      {
       "panorama": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
       "class": "AdjacentPanorama",
       "backwardYaw": -134.54,
       "yaw": 149.92,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_t.jpg",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "y": 1021.54,
       "x": 1271.98,
       "angle": -24.48,
       "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
      }
     ],
     "label": "Master - Doorway",
     "vfov": 180,
     "hfovMax": 120,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_13E6AB70_0715_B9E0_411A_5A5DFA839100",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.4,
           "yaw": 122.83,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 33,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -19.69
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 122.83,
           "hfov": 10.4,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 206,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -19.69
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1170E793_0714_C921_4185_C04BC0C04305",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 12.73,
           "yaw": -84.75,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -34.52
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -84.75,
           "hfov": 12.73,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 288,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -34.52
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1237895C_0713_5927_4196_9F37D30A8B1A",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD, this.camera_19056198_072C_C920_419C_0D18E25DEF2E); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.56,
           "yaw": 149.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 30,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -14.78
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 149.92,
           "hfov": 9.56,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 184,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -14.78
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1A9EDD67_072C_D9E1_4179_34D2D739F840",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964, this.camera_1979918E_072C_C920_415A_050B465CC30C); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.94,
           "yaw": -75.61,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 29,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -22.25
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -75.61,
           "hfov": 8.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 180,
              "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -22.25
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E.jpeg"
         }
        ]
       }
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": 149.92,
    "yaw": -134.54,
    "distance": 1
   },
   {
    "panorama": {
     "class": "Panorama",
     "hfovMin": 60,
     "hfov": 360,
     "id": "panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
     "adjacentPanoramas": [
      {
       "panorama": {
        "frameDisplayTime": 1000,
        "class": "LivePanorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
        "adjacentPanoramas": [
         {
          "panorama": {
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "id": "panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
             "class": "AdjacentPanorama",
             "backwardYaw": -28.14,
             "yaw": -40.94,
             "distance": 1
            },
            {
             "panorama": {
              "frameDisplayTime": 2000,
              "class": "LivePanorama",
              "hfovMin": 60,
              "hfov": 360,
              "id": "panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
                "class": "AdjacentPanorama",
                "backwardYaw": 37.73,
                "yaw": -102.59,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_1_t.jpg",
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "y": 577.01,
                "x": 2420.96,
                "angle": 287.04,
                "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
               }
              ],
              "label": "Guest Bath",
              "vfov": 180,
              "hfovMax": 120,
              "frameTransitionTime": 800,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_0_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1D17F7B0_0775_4960_4187_954DC5E86C85",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079, this.camera_1940B17A_072C_C9E3_4185_BFD12F6C5621); this.mainPlayList.set('selectedIndex', 11)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.48,
                    "yaw": -102.59,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 39,
                       "url": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -42.78
                   }
                  ],
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -102.59,
                    "hfov": 14.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 149,
                       "class": "ImageResourceLevel",
                       "width": 368,
                       "url": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -42.78
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3360,
                   "class": "ImageResourceLevel",
                   "width": 6720,
                   "url": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_0_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_0.jpeg"
                  }
                 ]
                }
               },
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_1_t.jpg",
                "overlays": [
                 "this.overlay_1D17F7B0_0775_4960_4187_954DC5E86C85"
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3360,
                   "class": "ImageResourceLevel",
                   "width": 6720,
                   "url": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_1_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_1.jpeg"
                  }
                 ]
                }
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": -102.59,
             "yaw": 37.73,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_t.jpg",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 835.32,
             "x": 2415.8,
             "angle": -36.66,
             "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
            }
           ],
           "label": "Hallway 1",
           "vfov": 180,
           "hfovMax": 120,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1D6EBFA9_0774_B961_4186_0DA82DD5DBCA",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB, this.camera_1AE1B147_072C_C921_415A_4976A89818E8); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.7,
                 "yaw": -40.94,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -27.46
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -40.94,
                 "hfov": 13.7,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "class": "ImageResourceLevel",
                    "width": 288,
                    "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -27.46
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1DA53FD2_0777_5923_4194_87827E745D6A",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE, this.camera_1A8F5151_072C_C920_4197_07D6C6A3CE8A); this.mainPlayList.set('selectedIndex', 12)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.9,
                 "yaw": 37.73,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 36,
                    "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -43.49
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 37.73,
                 "hfov": 14.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 170,
                    "class": "ImageResourceLevel",
                    "width": 383,
                    "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -43.49
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1DE18975_0774_B9E0_4173_D786C3FC80E2",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 14)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.1,
                 "yaw": 161.32,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 29,
                    "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -54.83
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 161.32,
                 "hfov": 13.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 229,
                    "class": "ImageResourceLevel",
                    "width": 424,
                    "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -54.83
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079.jpeg"
               }
              ]
             }
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -40.94,
          "yaw": -28.14,
          "distance": 1
         },
         {
          "panorama": {
           "frameDisplayTime": 2000,
           "class": "LivePanorama",
           "hfovMin": 60,
           "hfov": 360,
           "id": "panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
           "adjacentPanoramas": [
            {
             "panorama": {
              "frameDisplayTime": 2000,
              "class": "LivePanorama",
              "hfovMin": 60,
              "hfov": 360,
              "id": "panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
                "class": "AdjacentPanorama",
                "backwardYaw": -47.42,
                "yaw": 140.43,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_1_t.jpg",
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "y": 815.69,
                "x": 1264.28,
                "angle": 237.9,
                "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
               }
              ],
              "label": "Utility",
              "vfov": 180,
              "hfovMax": 120,
              "frameTransitionTime": 800,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_0_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1E575B56_077C_B923_4168_D9476F521063",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F, this.camera_23559092_072C_C723_4195_1D5A16CE2078); this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.14,
                    "yaw": 140.43,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 42,
                       "url": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -35.67
                   }
                  ],
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 140.43,
                    "hfov": 14.14,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 123,
                       "class": "ImageResourceLevel",
                       "width": 324,
                       "url": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -35.67
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3360,
                   "class": "ImageResourceLevel",
                   "width": 6720,
                   "url": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_0_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_0.jpeg"
                  }
                 ]
                }
               },
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_1_t.jpg",
                "overlays": [
                 "this.overlay_1E575B56_077C_B923_4168_D9476F521063"
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3360,
                   "class": "ImageResourceLevel",
                   "width": 6720,
                   "url": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_1_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_1.jpeg"
                  }
                 ]
                }
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 140.43,
             "yaw": -47.42,
             "distance": 1
            },
            {
             "panorama": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
             "class": "AdjacentPanorama",
             "backwardYaw": 121.56,
             "yaw": -132.46,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_1_t.jpg",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 493,
             "x": 1260.31,
             "angle": 0,
             "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
            }
           ],
           "label": "Laundry Room",
           "vfov": 180,
           "hfovMax": 120,
           "frameTransitionTime": 800,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1FD79C1D_077F_DF21_4146_656E9D8D0BFD",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9, this.camera_1912B1A3_072C_C961_419C_477040AEEBD8); this.mainPlayList.set('selectedIndex', 10)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 14.36,
                 "yaw": -47.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 20,
                    "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -36.53
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -47.42,
                 "hfov": 14.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 255,
                    "class": "ImageResourceLevel",
                    "width": 333,
                    "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -36.53
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1CF53D37_077C_D961_4172_5DE530F171AB",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB, this.camera_193D31AC_072C_C960_419A_BA21DED51DAC); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.95,
                 "yaw": -132.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -25.37
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -132.46,
                 "hfov": 13.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "class": "ImageResourceLevel",
                    "width": 288,
                    "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -25.37
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0.jpeg"
               }
              ]
             }
            },
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_1_t.jpg",
             "overlays": [
              "this.overlay_1FD79C1D_077F_DF21_4146_656E9D8D0BFD",
              "this.overlay_1CF53D37_077C_D961_4172_5DE530F171AB"
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_1_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_1.jpeg"
               }
              ]
             }
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -132.46,
          "yaw": 121.56,
          "distance": 1
         },
         {
          "panorama": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
          "class": "AdjacentPanorama",
          "backwardYaw": 6.36,
          "yaw": 16.43,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_2_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 540.46,
          "x": 1817.87,
          "angle": 0,
          "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
         }
        ],
        "label": "Kitchen",
        "vfov": 180,
        "hfovMax": 120,
        "frameTransitionTime": 1000,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1F38C490_0773_CF3F_4181_5A97E4B58822",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184, this.camera_19A501E1_072C_C8E1_4190_4EF76AC47853); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 14.27,
              "yaw": 16.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 32,
                 "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.48
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 16.43,
              "hfov": 14.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 144,
                 "class": "ImageResourceLevel",
                 "width": 288,
                 "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -22.48
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1DE5AB61_077C_F9E0_4198_372ADD472A8E",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079, this.camera_19F6D1CC_072C_C927_4194_04A78AD3C992); this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.6,
              "yaw": -28.14,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 16,
                 "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.01
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -28.14,
              "hfov": 9.6,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 194,
                 "class": "ImageResourceLevel",
                 "width": 193,
                 "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -22.01
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1D932F80_077D_B91F_4173_462B54B8AA00",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F, this.camera_199EC1D7_072C_C921_4188_83136DAAFB81); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.65,
              "yaw": 121.56,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 47,
                 "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.86
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 121.56,
              "hfov": 13.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 288,
                 "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -27.86
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0.jpeg"
            }
           ]
          }
         },
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_1_t.jpg",
          "overlays": [
           "this.overlay_1F38C490_0773_CF3F_4181_5A97E4B58822",
           "this.overlay_1DE5AB61_077C_F9E0_4198_372ADD472A8E",
           "this.overlay_1D932F80_077D_B91F_4173_462B54B8AA00"
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_1_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_1.jpeg"
            }
           ]
          }
         },
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_2_t.jpg",
          "overlays": [
           "this.overlay_1F38C490_0773_CF3F_4181_5A97E4B58822",
           "this.overlay_1DE5AB61_077C_F9E0_4198_372ADD472A8E",
           "this.overlay_1D932F80_077D_B91F_4173_462B54B8AA00"
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_2_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_2.jpeg"
            }
           ]
          }
         },
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_3_t.jpg",
          "overlays": [
           "this.overlay_1F38C490_0773_CF3F_4181_5A97E4B58822",
           "this.overlay_1DE5AB61_077C_F9E0_4198_372ADD472A8E",
           "this.overlay_1D932F80_077D_B91F_4173_462B54B8AA00"
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_3_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_3.jpeg"
            }
           ]
          }
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 16.43,
       "yaw": 6.36,
       "distance": 1
      },
      {
       "panorama": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
       "class": "AdjacentPanorama",
       "backwardYaw": -91.01,
       "yaw": 150.79,
       "distance": 1
      },
      {
       "panorama": {
        "class": "Panorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
        "adjacentPanoramas": [
         {
          "panorama": {
           "frameDisplayTime": 1000,
           "class": "LivePanorama",
           "hfovMin": 60,
           "hfov": 360,
           "id": "panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
           "adjacentPanoramas": [
            {
             "panorama": {
              "class": "Panorama",
              "hfovMin": 60,
              "hfov": 360,
              "id": "panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
                "class": "AdjacentPanorama",
                "backwardYaw": -54.65,
                "yaw": -36.94,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_t.jpg",
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "y": 823.05,
                "x": 733.2,
                "angle": 113.6,
                "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
               }
              ],
              "label": "Master Bath2",
              "vfov": 180,
              "hfovMax": 120,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_10E80861_0775_47E0_416C_DC076570B350",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 16.28,
                    "yaw": 6.95,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 19,
                       "class": "ImageResourceLevel",
                       "width": 16,
                       "url": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -23.76
                   }
                  ],
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 6.95,
                    "hfov": 16.28,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 402,
                       "class": "ImageResourceLevel",
                       "width": 332,
                       "url": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -23.76
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_10AD98A0_0775_C760_4190_2B772FB339EE",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A, this.camera_23483081_072C_C721_4160_646E9705AAE4); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.35,
                    "yaw": -36.94,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 42,
                       "url": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -64.27
                   }
                  ],
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -36.94,
                    "hfov": 14.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 231,
                       "class": "ImageResourceLevel",
                       "width": 616,
                       "url": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -64.27
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3360,
                   "class": "ImageResourceLevel",
                   "width": 6720,
                   "url": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8.jpeg"
                  }
                 ]
                }
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": -36.94,
             "yaw": -54.65,
             "distance": 1
            },
            {
             "panorama": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
             "class": "AdjacentPanorama",
             "backwardYaw": 35.77,
             "yaw": -150.06,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_1_t.jpg",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 791.33,
             "x": 875.34,
             "angle": 331.72,
             "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
            }
           ],
           "label": "Master Bath1",
           "vfov": 180,
           "hfovMax": 120,
           "frameTransitionTime": 1000,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1193BD71_0774_B9E1_4181_8C1D4B520E16",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8, this.camera_233AB0C4_072C_C727_4174_6FC13597D597); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.3,
                 "yaw": -54.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 40,
                    "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -57.9
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -54.65,
                 "hfov": 10.3,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 142,
                    "class": "ImageResourceLevel",
                    "width": 361,
                    "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -57.9
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1E426E00_0777_BB20_4186_36D3C70C1480",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0, this.camera_1ACEA11E_072C_C923_4192_A7B8D0794A21); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 18.97,
                 "yaw": -150.06,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 37,
                    "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -54.95
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -150.06,
                 "hfov": 18.97,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 263,
                    "class": "ImageResourceLevel",
                    "width": 616,
                    "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -54.95
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0.jpeg"
               }
              ]
             }
            },
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_1_t.jpg",
             "overlays": [
              "this.overlay_1193BD71_0774_B9E1_4181_8C1D4B520E16",
              "this.overlay_1E426E00_0777_BB20_4186_36D3C70C1480"
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_1_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_1.jpeg"
               }
              ]
             }
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -150.06,
          "yaw": 35.77,
          "distance": 1
         },
         {
          "panorama": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
          "class": "AdjacentPanorama",
          "backwardYaw": -91.47,
          "yaw": 93.65,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 1193.47,
          "x": 872.04,
          "angle": -24.84,
          "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
         }
        ],
        "label": "Master Bedroom",
        "vfov": 180,
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_11B70A35_076D_DB60_4197_F7C86CE4A03C",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A, this.camera_1AC43129_072C_C961_4184_ECE192279238); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.72,
              "yaw": 35.77,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -26.87
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 35.77,
              "hfov": 11.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 245,
                 "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -26.87
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_11654CD7_076C_DF21_4192_0DA259132205",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.91,
              "yaw": -10.14,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 31,
                 "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -29.48
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -10.14,
              "hfov": 8.91,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 191,
                 "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -29.48
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_11C7B11E_0773_4923_4156_61481691D5E6",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184, this.camera_1ADAB133_072C_C961_419B_1E3EA678A152); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.77,
              "yaw": 93.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 33,
                 "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -26.64
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 93.65,
              "hfov": 9.77,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 203,
                 "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -26.64
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0.jpeg"
            }
           ]
          }
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 93.65,
       "yaw": -91.47,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_t.jpg",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "y": 1005.89,
       "x": 1718.71,
       "angle": 0,
       "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
      }
     ],
     "label": "Living Room",
     "vfov": 180,
     "hfovMax": 136,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_13342E87_0733_DB20_4181_0DCB5E5834CC",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB, this.camera_1A9B215C_072C_C927_416A_4B64E3112D4C); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.57,
           "yaw": 6.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.55
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 6.36,
           "hfov": 13.57,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 288,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -28.55
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_14E65065_0733_47E0_417D_A11F055E63AA",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 11)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.46,
           "yaw": 65.29,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 35,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -25.83
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 65.29,
           "hfov": 10.46,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 216,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -25.83
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_14E28762_073D_C9E0_4195_7BE7EF22C45D",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0, this.camera_1AB4A16F_072C_C9E1_419B_B5C475F8DA8B); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.52,
           "yaw": -91.47,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 27,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -18.02
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -91.47,
           "hfov": 8.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 167,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -18.02
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_13C28790_073F_493F_4192_D6736FCA7690",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD, this.camera_1AA70166_072C_C9E3_419A_A88D11A03DAF); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.31,
           "yaw": 150.79,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 36,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.5
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 150.79,
           "hfov": 10.31,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 219,
              "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -28.5
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184.jpeg"
         }
        ]
       }
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": 150.79,
    "yaw": -91.01,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1345.25,
    "x": 2036.25,
    "angle": 72.37,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "label": "Entry",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_17F72B4C_072D_D927_4183_E3561203ACE8",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184, this.camera_231700BA_072C_C760_4193_24F4E80127DA); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.74,
        "yaw": -91.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 17,
           "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -34.02
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -91.01,
        "hfov": 12.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 261,
           "class": "ImageResourceLevel",
           "width": 286,
           "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -34.02
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_15379050_0737_4720_4188_EC171F620503",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.9,
        "yaw": -80.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -17.12
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -80.24,
        "hfov": 7.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "class": "ImageResourceLevel",
           "width": 154,
           "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -17.12
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_12169768_0737_49E0_4162_55A59A303D18",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E, this.camera_230EB0AF_072C_C761_4198_AEB688B29030); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.73,
        "yaw": -134.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "class": "ImageResourceLevel",
           "width": 16,
           "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.19
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -134.54,
        "hfov": 4.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 97,
           "class": "ImageResourceLevel",
           "width": 91,
           "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -14.19
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_1_t.jpg",
    "overlays": [
     "this.overlay_17F72B4C_072D_D927_4183_E3561203ACE8",
     "this.overlay_15379050_0737_4720_4188_EC171F620503",
     "this.overlay_12169768_0737_49E0_4162_55A59A303D18"
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "borderSize": 0,
   "class": "IconButton",
   "paddingLeft": 0,
   "mode": "toggle",
   "width": 67.99,
   "horizontalAlign": "center",
   "height": 55.72,
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
   "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1166"
   },
   "verticalAlign": "middle",
   "transparencyActive": true,
   "paddingTop": 0,
   "paddingRight": 0
  }
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "progressRight": 10,
   "toolTipOpacity": 1,
   "class": "ViewerArea",
   "paddingLeft": 0,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "toolTipPaddingLeft": 6,
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarBorderSize": 2,
   "toolTipPaddingTop": 4,
   "playbackBarBackgroundOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "borderRadius": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipShadowSpread": 0,
   "paddingBottom": 0,
   "toolTipShadowOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadBorderColor": "#000000",
   "progressLeft": 10,
   "playbackBarProgressBorderColor": "#000000",
   "minHeight": 1,
   "shadow": false,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "progressBorderColor": "#AAAAAA",
   "playbackBarBorderRadius": 4,
   "toolTipFontSize": 12,
   "paddingTop": 0,
   "playbackBarBottom": 0,
   "toolTipShadowVerticalLength": 0,
   "progressHeight": 20,
   "progressBottom": 2,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBarBorderRadius": 4,
   "height": "95.62%",
   "progressBarOpacity": 1,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "playbackBarProgressBorderSize": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "progressBackgroundOpacity": 1,
   "playbackBarOpacity": 1,
   "transitionMode": "blending",
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadHeight": 30,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarProgressBorderRadius": 0,
   "progressBorderRadius": 4,
   "progressBarBorderColor": "#000000",
   "width": "96.966%",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "minWidth": 1,
   "playbackBarHeadShadow": true,
   "transitionDuration": 500,
   "top": "1.58%",
   "progressBarBorderSize": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarRight": 0,
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadWidth": 6,
   "playbackBarBackgroundColorDirection": "vertical",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "id": "MapViewer",
   "toolTipBorderColor": "#767676",
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal",
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "toolTipFontStyle": "normal",
   "playbackBarHeight": 20,
   "left": "1.29%",
   "paddingRight": 0,
   "progressBorderSize": 2,
   "progressOpacity": 1,
   "toolTipBorderSize": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -144.17,
   "pitch": 1.81
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 106.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.14
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 124,
   "yaw": 61.59,
   "pitch": -4.59
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.43,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.13
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.24,
   "pitch": -0.77
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -71.87,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.28
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 108.03,
   "pitch": -0.9
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 30.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.62
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.01,
   "pitch": -3.09
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -13.87,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.4
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.15,
   "pitch": -2.68
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 36.36,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.87,
   "pitch": -2.03
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 23.97,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.28
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
 {
  "class": "PanoramaCamera",
  "id": "panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -108.3,
   "pitch": 0.28
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 21.04,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.86
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
 {
  "class": "PanoramaCamera",
  "id": "panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.91,
   "pitch": -0.24
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.12,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.62,
   "pitch": -5.21
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.49,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.18,
   "pitch": 1.88
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 145.41,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.41
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
 {
  "class": "PanoramaCamera",
  "id": "panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.72,
   "pitch": -3.08
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 31.19,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
 {
  "class": "PanoramaCamera",
  "id": "panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -47.08,
   "pitch": -0.89
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -103.94,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.75
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
  "adjacentPanoramas": [
   {
    "panorama": {
     "class": "Panorama",
     "hfovMin": 60,
     "hfov": 360,
     "id": "panorama_F474F230_F6B3_2867_41E3_224533737005",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
       "class": "AdjacentPanorama",
       "backwardYaw": 23.66,
       "yaw": 92.49,
       "distance": 1
      },
      {
       "panorama": {
        "class": "Panorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
          "class": "AdjacentPanorama",
          "backwardYaw": -151.33,
          "yaw": 79.76,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 550.11,
          "x": 2876.06,
          "angle": -236.3,
          "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
         }
        ],
        "label": "Bedroom 4",
        "vfov": 180,
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1BB403D7_0713_C921_4197_92809249FB10",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_F474F230_F6B3_2867_41E3_224533737005, this.camera_1AEF513D_072C_C960_417C_D237A3D56840); this.mainPlayList.set('selectedIndex', 14)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.64,
              "yaw": 79.76,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 47,
                 "url": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -35.04
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 79.76,
              "hfov": 12.64,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 288,
                 "url": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -35.04
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C.jpeg"
            }
           ]
          }
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 79.76,
       "yaw": -151.33,
       "distance": 1
      },
      {
       "panorama": {
        "class": "Panorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
          "class": "AdjacentPanorama",
          "backwardYaw": 156.98,
          "yaw": 151.89,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 1273.76,
          "x": 2883.93,
          "angle": -190.55,
          "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
         }
        ],
        "label": "Bedroom 3",
        "vfov": 180,
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1BDA8D6C_0715_79E0_4194_08D88CFC8A00",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_F474F230_F6B3_2867_41E3_224533737005, this.camera_2361A0A1_072C_C761_418D_1D60B2C74010); this.mainPlayList.set('selectedIndex', 14)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.04,
              "yaw": 151.89,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 47,
                 "url": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -32.37
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 151.89,
              "hfov": 13.04,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 288,
                 "url": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -32.37
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E.jpeg"
            }
           ]
          }
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 151.89,
       "yaw": 156.98,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_t.jpg",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "y": 1019.43,
       "x": 2568.18,
       "angle": 283.48,
       "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
      }
     ],
     "label": "Hallway 2",
     "vfov": 180,
     "hfovMax": 120,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1C7DB94E_076C_D920_4195_9E518B085B37",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.42,
           "yaw": -35.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.97
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -35.55,
           "hfov": 14.42,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 288,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -20.97
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1C9EFF11_076F_5921_4195_DD783FBA3B78",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 12)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 12,
           "yaw": 4.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -39.03
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 4.1,
           "hfov": 12,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 288,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -39.03
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1B3EA133_076F_4961_418C_61D99F1414E1",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E, this.camera_1850D1F5_072C_C8E1_4191_AD37D37AA908); this.mainPlayList.set('selectedIndex', 13)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.85,
           "yaw": 92.49,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 28,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.85
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 92.49,
           "hfov": 15.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 188,
              "class": "ImageResourceLevel",
              "width": 337,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -28.85
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1B783FD5_0717_7921_415A_C4AA1331B16E",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E, this.camera_1818A209_072C_CB21_4180_EB4A1E251D96); this.mainPlayList.set('selectedIndex', 15)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.26,
           "yaw": 156.98,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -30.87
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 156.98,
           "hfov": 13.26,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 288,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -30.87
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1BBFEC0B_0715_7F27_4197_5E63DD08BF3A",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C, this.camera_1874B200_072C_CB1F_415E_0F0CD0866600); this.mainPlayList.set('selectedIndex', 16)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.2,
           "yaw": -151.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "pitch": -31.28
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -151.33,
           "hfov": 13.2,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 288,
              "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -31.28
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_F474F230_F6B3_2867_41E3_224533737005.jpeg"
         }
        ]
       }
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": 92.49,
    "yaw": 23.66,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1294.32,
    "x": 2398.03,
    "angle": 39.06,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "label": "Bedroom2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1C210DCD_0773_B921_4188_3D67B53C5B20",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F474F230_F6B3_2867_41E3_224533737005, this.camera_196D8185_072C_C921_4191_91425D3CB585); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.46,
        "yaw": 23.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 24,
           "url": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -36.2
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 23.66,
        "hfov": 12.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 190,
           "class": "ImageResourceLevel",
           "width": 288,
           "url": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -36.2
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 141.99,
   "pitch": -6.61
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.23,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.06
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
 {
  "class": "PanoramaCamera",
  "id": "panorama_F474F230_F6B3_2867_41E3_224533737005_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.45,
   "pitch": -5.39
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.92,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.43
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.9,
   "pitch": -2.12
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -147.47,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.11
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 146.65,
   "pitch": -0.95
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 80,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.08
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24905063_072C_C7E1_417E_D899B27F1793, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24905063_072C_C7E1_417E_D899B27F1793",
    "media": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
    "camera": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AF7063_072C_C7E1_4173_291C3B246F1E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AF7063_072C_C7E1_4173_291C3B246F1E",
    "media": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
    "camera": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AEE064_072C_C7E0_4187_619C960372F7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AEE064_072C_C7E0_4187_619C960372F7",
    "media": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
    "camera": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AE6064_072C_C7E0_4179_786CE4C67B88, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AE6064_072C_C7E0_4179_786CE4C67B88",
    "media": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
    "camera": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24ADD064_072C_C7E0_4184_F4D7DF1A0796, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24ADD064_072C_C7E0_4184_F4D7DF1A0796",
    "media": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
    "camera": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AD2064_072C_C7E0_4162_5ACE0417B5C6, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AD2064_072C_C7E0_4162_5ACE0417B5C6",
    "media": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
    "camera": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AC9064_072C_C7E0_4187_12C56A0BFB92, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AC9064_072C_C7E0_4187_12C56A0BFB92",
    "media": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
    "camera": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24ABE064_072C_C7E0_418E_24E42E90F357, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24ABE064_072C_C7E0_418E_24E42E90F357",
    "media": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
    "camera": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AB4065_072C_C7E0_416A_8EF29FA9A707, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AB4065_072C_C7E0_416A_8EF29FA9A707",
    "media": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
    "camera": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AAA065_072C_C7E0_419B_3FA99B2CA784, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AAA065_072C_C7E0_419B_3FA99B2CA784",
    "media": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
    "camera": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24AA3065_072C_C7E0_4173_152EEFF60385, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24AA3065_072C_C7E0_4173_152EEFF60385",
    "media": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
    "camera": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24A9706B_072C_C7E1_4195_8E5DFFF43B2F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24A9706B_072C_C7E1_4195_8E5DFFF43B2F",
    "media": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
    "camera": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24A8D06B_072C_C7E1_4161_55B2EDAEA080, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24A8D06B_072C_C7E1_4161_55B2EDAEA080",
    "media": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
    "camera": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24A8206B_072C_C7E1_418A_98E548897E10, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24A8206B_072C_C7E1_418A_98E548897E10",
    "media": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
    "camera": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24A7806B_072C_C7E1_4196_CCF35454BAB8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24A7806B_072C_C7E1_4196_CCF35454BAB8",
    "media": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
    "camera": "this.panorama_F474F230_F6B3_2867_41E3_224533737005_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24A6E06C_072C_C7E7_4186_4B67EEE48108, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24A6E06C_072C_C7E7_4186_4B67EEE48108",
    "media": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
    "camera": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_24A6706C_072C_C7E7_4198_8451486F707C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_24A6706C_072C_C7E7_4198_8451486F707C",
    "media": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
    "camera": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_F68B0B91_E610_14C8_41EC_C8A36F5B3D31_t.jpg",
  "label": "Cle Elum 601F Drone",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_F68B0B91_E610_14C8_41EC_C8A36F5B3D31.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_F68B0B91_E610_14C8_41EC_C8A36F5B3D31",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F68B0B91_E610_14C8_41EC_C8A36F5B3D31",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
    "camera": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
    "camera": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
    "camera": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
    "camera": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
    "camera": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
    "camera": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
    "camera": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
    "camera": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
    "camera": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
    "camera": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
    "camera": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
    "camera": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
    "camera": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, 14)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
    "camera": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
    "camera": "this.panorama_F474F230_F6B3_2867_41E3_224533737005_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
    "camera": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
    "camera": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 17, 0)"
   }
  ]
 },
 "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D",
 {
  "class": "PlayList",
  "id": "playList_2491E063_072C_C7E1_4191_68147AC44395",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_DCC79303_D197_D47B_41C9_556DC56FB1AB_t.jpg",
  "label": "MTVGoldenwestvid4Lodge",
  "video": {
   "class": "VideoResource",
   "width": 1920,
   "height": 1080,
   "mp4Url": "media/video_DCC79303_D197_D47B_41C9_556DC56FB1AB.mp4"
  },
  "width": 1920,
  "id": "video_DCC79303_D197_D47B_41C9_556DC56FB1AB",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 "this.MainViewerVideoPlayer",
 {
  "class": "PlayList",
  "id": "playList_24913063_072C_C7E1_4191_CEDEE722ABE5",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DCC79303_D197_D47B_41C9_556DC56FB1AB",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_24913063_072C_C7E1_4191_CEDEE722ABE5, 0, '#000000')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_24911063_072C_C7E1_4199_E02E12FABE48",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_23483081_072C_C721_4160_646E9705AAE4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 125.35,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -147.87,
     "path": "shortest",
     "pitchSpeed": 26.52,
     "yawSpeed": 52.27,
     "easing": "cubic_in_out",
     "targetPitch": -2.03
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 23.97,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.28
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_23559092_072C_C723_4195_1D5A16CE2078",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 132.58,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 133.62,
     "path": "shortest",
     "pitchSpeed": 1.47,
     "yawSpeed": 1.94,
     "easing": "cubic_in_out",
     "targetPitch": -5.21
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.49,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2361A0A1_072C_C761_418D_1D60B2C74010",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.02,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.45,
     "path": "shortest",
     "pitchSpeed": 7.77,
     "yawSpeed": 14.6,
     "easing": "cubic_in_out",
     "targetPitch": -5.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.92,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.43
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_230EB0AF_072C_C761_4198_AEB688B29030",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -30.08,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 143.24,
     "path": "shortest",
     "pitchSpeed": 13.93,
     "yawSpeed": 26.98,
     "easing": "cubic_in_out",
     "targetPitch": -0.77
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -71.87,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.28
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_231700BA_072C_C760_4193_24F4E80127DA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 124,
   "yaw": -29.21,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 61.59,
     "path": "shortest",
     "pitchSpeed": 10.54,
     "yawSpeed": 20.16,
     "easing": "cubic_in_out",
     "targetPitch": -4.59
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.43,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.13
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_233AB0C4_072C_C727_4174_6FC13597D597",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.06,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -108.3,
     "path": "shortest",
     "pitchSpeed": 32.19,
     "yawSpeed": 63.67,
     "easing": "cubic_in_out",
     "targetPitch": 0.28
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 21.04,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.86
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1ACEA11E_072C_C923_4192_A7B8D0794A21",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -144.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -10.15,
     "path": "shortest",
     "pitchSpeed": 47.26,
     "yawSpeed": 93.96,
     "easing": "cubic_in_out",
     "targetPitch": -2.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 36.36,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1AC43129_072C_C961_4184_ECE192279238",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 29.94,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -147.87,
     "path": "shortest",
     "pitchSpeed": 17.61,
     "yawSpeed": 34.37,
     "easing": "cubic_in_out",
     "targetPitch": -2.03
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 23.97,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.28
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1ADAB133_072C_C961_419B_1E3EA678A152",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 124,
   "yaw": 88.53,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 61.59,
     "path": "shortest",
     "pitchSpeed": 3.87,
     "yawSpeed": 6.76,
     "easing": "cubic_in_out",
     "targetPitch": -4.59
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.43,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.13
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1AEF513D_072C_C960_417C_D237A3D56840",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 28.67,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.45,
     "path": "shortest",
     "pitchSpeed": 10.51,
     "yawSpeed": 20.11,
     "easing": "cubic_in_out",
     "targetPitch": -5.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.92,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.43
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1AE1B147_072C_C921_415A_4976A89818E8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 151.86,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -72.91,
     "path": "shortest",
     "pitchSpeed": 19.59,
     "yawSpeed": 38.36,
     "easing": "cubic_in_out",
     "targetPitch": -0.24
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.12,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1A8F5151_072C_C920_4197_07D6C6A3CE8A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 77.41,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -47.08,
     "path": "shortest",
     "pitchSpeed": 36.02,
     "yawSpeed": 71.36,
     "easing": "cubic_in_out",
     "targetPitch": -0.89
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -103.94,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.75
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1A9B215C_072C_C927_416A_4B64E3112D4C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.57,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -72.91,
     "path": "shortest",
     "pitchSpeed": 8.5,
     "yawSpeed": 16.07,
     "easing": "cubic_in_out",
     "targetPitch": -0.24
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.12,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1AA70166_072C_C9E3_419A_A88D11A03DAF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.99,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -144.17,
     "path": "shortest",
     "pitchSpeed": 15.9,
     "yawSpeed": 30.94,
     "easing": "cubic_in_out",
     "targetPitch": 1.81
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 106.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.14
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1AB4A16F_072C_C9E1_419B_B5C475F8DA8B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.35,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -10.15,
     "path": "shortest",
     "pitchSpeed": 27.3,
     "yawSpeed": 53.85,
     "easing": "cubic_in_out",
     "targetPitch": -2.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 36.36,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1940B17A_072C_C9E3_4185_BFD12F6C5621",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.27,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -50.72,
     "path": "shortest",
     "pitchSpeed": 18.94,
     "yawSpeed": 37.05,
     "easing": "cubic_in_out",
     "targetPitch": -3.08
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 31.19,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_196D8185_072C_C921_4191_91425D3CB585",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -87.51,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.45,
     "path": "shortest",
     "pitchSpeed": 4.35,
     "yawSpeed": 7.74,
     "easing": "cubic_in_out",
     "targetPitch": -5.39
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.92,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.43
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1979918E_072C_C920_415A_050B465CC30C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -75.24,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 108.03,
     "path": "shortest",
     "pitchSpeed": 39.16,
     "yawSpeed": 77.68,
     "easing": "cubic_in_out",
     "targetPitch": -0.9
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 30.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.62
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19056198_072C_C920_419C_0D18E25DEF2E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.46,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -144.17,
     "path": "shortest",
     "pitchSpeed": 13.12,
     "yawSpeed": 25.35,
     "easing": "cubic_in_out",
     "targetPitch": 1.81
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 106.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.14
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1912B1A3_072C_C961_419C_477040AEEBD8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.57,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 18.18,
     "path": "shortest",
     "pitchSpeed": 8.29,
     "yawSpeed": 15.65,
     "easing": "cubic_in_out",
     "targetPitch": 1.88
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 145.41,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.41
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_193D31AC_072C_C960_419A_BA21DED51DAC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -58.44,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -72.91,
     "path": "shortest",
     "pitchSpeed": 2.2,
     "yawSpeed": 3.41,
     "easing": "cubic_in_out",
     "targetPitch": -0.24
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.12,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19C511B6_072C_C960_415C_75C6C008C816",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 104.39,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 143.24,
     "path": "shortest",
     "pitchSpeed": 3.9,
     "yawSpeed": 6.83,
     "easing": "cubic_in_out",
     "targetPitch": -0.77
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -71.87,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.28
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19EE81C1_072C_C921_4191_C20B120E33CE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 104.28,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -98.01,
     "path": "shortest",
     "pitchSpeed": 39.56,
     "yawSpeed": 78.48,
     "easing": "cubic_in_out",
     "targetPitch": -3.09
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -13.87,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.4
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19F6D1CC_072C_C927_4194_04A78AD3C992",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 139.06,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -50.72,
     "path": "shortest",
     "pitchSpeed": 38.18,
     "yawSpeed": 75.71,
     "easing": "cubic_in_out",
     "targetPitch": -3.08
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 31.19,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_199EC1D7_072C_C921_4188_83136DAAFB81",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 47.54,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 133.62,
     "path": "shortest",
     "pitchSpeed": 8.6,
     "yawSpeed": 16.27,
     "easing": "cubic_in_out",
     "targetPitch": -5.21
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.49,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19A501E1_072C_C8E1_4190_4EF76AC47853",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 124,
   "yaw": -173.64,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 61.59,
     "path": "shortest",
     "pitchSpeed": 25.68,
     "yawSpeed": 50.59,
     "easing": "cubic_in_out",
     "targetPitch": -4.59
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.43,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.13
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_184B51EB_072C_C8E0_418B_3AA35561A8F6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.71,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 108.03,
     "path": "shortest",
     "pitchSpeed": 54.25,
     "yawSpeed": 108.01,
     "easing": "cubic_in_out",
     "targetPitch": -0.9
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 30.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.62
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1850D1F5_072C_C8E1_4191_AD37D37AA908",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.34,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 141.99,
     "path": "shortest",
     "pitchSpeed": 39.99,
     "yawSpeed": 79.34,
     "easing": "cubic_in_out",
     "targetPitch": -6.61
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.23,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.06
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1874B200_072C_CB1F_415E_0F0CD0866600",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -100.24,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 146.65,
     "path": "shortest",
     "pitchSpeed": 60.45,
     "yawSpeed": 120.46,
     "easing": "cubic_in_out",
     "targetPitch": -0.95
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 80,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.08
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1818A209_072C_CB21_4180_EB4A1E251D96",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -28.11,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 150.9,
     "path": "shortest",
     "pitchSpeed": 10.63,
     "yawSpeed": 20.35,
     "easing": "cubic_in_out",
     "targetPitch": -2.12
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -147.47,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.11
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "data": {
   "label": "Got a porch made of timber, on a winding"
  },
  "class": "MediaAudio",
  "id": "audio_F559DBF2_E610_3448_41E1_128A8E492A69",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_F559DBF2_E610_3448_41E1_128A8E492A69.mp3",
   "oggUrl": "media/audio_F559DBF2_E610_3448_41E1_128A8E492A69.ogg"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "progressRight": 0,
  "toolTipOpacity": 0.24,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderSize": 0,
  "toolTipPaddingTop": 4,
  "playbackBarBackgroundOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "borderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 0.32,
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressLeft": 0,
  "playbackBarProgressBorderColor": "#000000",
  "minHeight": 50,
  "shadow": false,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "progressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "playbackBarBottom": 5,
  "toolTipShadowVerticalLength": 36,
  "progressHeight": 10,
  "progressBottom": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 36,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "height": "100%",
  "progressBarOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 56,
  "playbackBarLeft": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarOpacity": 1,
  "transitionMode": "blending",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBorderRadius": 0,
  "progressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "width": "100%",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "minWidth": 100,
  "playbackBarHeadShadow": true,
  "transitionDuration": 300,
  "progressBarBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarRight": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "id": "MainViewer",
  "toolTipBorderColor": "#767676",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "toolTipFontWeight": "normal",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarHeight": 10,
  "progressBorderSize": 0,
  "paddingRight": 0,
  "progressOpacity": 1,
  "toolTipBorderSize": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "class": "ThumbnailList",
  "paddingLeft": 0,
  "itemThumbnailShadowBlurRadius": 8,
  "horizontalAlign": "left",
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 0,
  "selectedItemLabelFontColor": "#00CC33",
  "selectedItemLabelFontSize": 17,
  "itemThumbnailShadowOpacity": 0.54,
  "paddingBottom": 0,
  "selectedItemLabelTextDecoration": "underline",
  "itemVerticalAlign": "middle",
  "rollOverItemLabelFontWeight": "bold",
  "minHeight": 20,
  "shadow": false,
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "backgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 87,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingBottom": 3,
  "paddingTop": 0,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 0,
  "width": 185.05,
  "height": "74.709%",
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "rollOverItemLabelFontSize": 15,
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 50,
  "layout": "vertical",
  "rollOverItemBackgroundOpacity": 0,
  "rollOverItemLabelTextDecoration": "none",
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "9.51%",
  "rollOverItemLabelFontColor": "#0099CC",
  "itemOpacity": 1,
  "itemThumbnailShadow": true,
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelFontStyle": "normal",
  "scrollBarOpacity": 0.5,
  "itemThumbnailWidth": 136,
  "gap": 1,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0.03%",
  "paddingRight": 0,
  "itemLabelPosition": "bottom",
  "itemThumbnailShadowVerticalLength": 3,
  "itemBackgroundColorRatios": []
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "height": "5.582%",
  "width": "37.846%",
  "borderRadius": 0,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "cursor": "hand",
  "maxWidth": 1694,
  "minHeight": 1,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Leters"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "left": "29.2%",
  "paddingTop": 0,
  "maxHeight": 145,
  "paddingRight": 0
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "height": "6.604%",
  "width": "9.212%",
  "borderRadius": 0,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1412,
  "minHeight": 1,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Logo"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "maxHeight": 800,
  "right": "24.72%",
  "paddingRight": 0
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "overflow": "visible",
  "class": "Container",
  "children": [
   "this.MapViewer"
  ],
  "paddingLeft": 10,
  "gap": 0,
  "horizontalAlign": "left",
  "height": "80.818%",
  "width": "100%",
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 75,
  "visible": false,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "backgroundOpacity": 0,
  "data": {
   "name": "Container18244"
  },
  "verticalAlign": "bottom",
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0,
  "paddingRight": 170,
  "contentOpaque": false
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "overflow": "visible",
  "class": "Container",
  "children": [
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "class": "Container",
    "children": [
     {
      "borderSize": 0,
      "class": "Label",
      "paddingLeft": 0,
      "horizontalAlign": "right",
      "fontSize": 42,
      "width": "44.135%",
      "height": "48%",
      "textDecoration": "none",
      "borderRadius": 0,
      "text": "Floor Plan",
      "fontFamily": "Arial",
      "fontStyle": "normal",
      "fontWeight": "normal",
      "minWidth": 60,
      "click": "this.openLink(\"https://www.mtviewhomes.com/inventory-detail/43946/mountain-view-homes-sequim/sequim/land%2Fhome-packages/\", \"_blank\")",
      "maxWidth": 8000,
      "minHeight": 60,
      "paddingBottom": 0,
      "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
      "backgroundOpacity": 0,
      "data": {
       "name": "Label20305"
      },
      "verticalAlign": "middle",
      "shadow": false,
      "fontColor": "#000000",
      "paddingTop": 0,
      "maxHeight": 8000,
      "paddingRight": 0
     },
     {
      "borderSize": 0,
      "class": "IconButton",
      "paddingLeft": 0,
      "mode": "toggle",
      "width": 57.3,
      "horizontalAlign": "center",
      "height": 57.5,
      "borderRadius": 0,
      "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
      "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
      "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
      "minWidth": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49925"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "paddingTop": 0,
      "paddingRight": 0
     }
    ],
    "paddingLeft": 0,
    "gap": 10,
    "horizontalAlign": "center",
    "height": "100%",
    "width": "75%",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_14C78FA6_02B9_D901_4106_D4A19767B3C0",
    "backgroundOpacity": 0,
    "data": {
     "name": "1left"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "overflow": "scroll"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "class": "Container",
    "children": [
     {
      "borderSize": 0,
      "class": "IconButton",
      "paddingLeft": 0,
      "mode": "toggle",
      "width": 62.65,
      "horizontalAlign": "center",
      "height": 56.91,
      "borderRadius": 0,
      "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
      "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
      "minWidth": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "paddingTop": 0,
      "paddingRight": 0
     },
     "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
    ],
    "paddingLeft": 0,
    "gap": 10,
    "horizontalAlign": "center",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_1430A2C2_02BA_AB00_40E2_9CE642BF8400",
    "backgroundOpacity": 0,
    "data": {
     "name": "1middle"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "overflow": "scroll"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "class": "Container",
    "paddingLeft": 0,
    "gap": 10,
    "horizontalAlign": "right",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_14A15C37_02BB_BF00_4151_81CC9AE724F2",
    "backgroundOpacity": 0,
    "data": {
     "name": "1right"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "overflow": "scroll"
   }
  ],
  "paddingLeft": 2,
  "gap": 10,
  "horizontalAlign": "center",
  "height": "10%",
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 2,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_EE9C3224_FD66_57E8_41EF_73BEBD124236",
  "backgroundOpacity": 0,
  "data": {
   "name": "Global"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "paddingRight": 2,
  "contentOpaque": false
 },
 {
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "paddingRight": 0,
  "toolTipOpacity": 1,
  "class": "IconButton",
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "mode": "toggle",
  "toolTipPaddingLeft": 6,
  "width": 67.4,
  "toolTipPaddingTop": 4,
  "horizontalAlign": "center",
  "height": 62.29,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "toolTipBorderSize": 1,
  "borderRadius": 0,
  "toolTipBackgroundColor": "transparent",
  "toolTipShadowSpread": 0,
  "toolTip": "Fullscreen",
  "toolTipShadowOpacity": 0.32,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 128,
  "toolTipPaddingBottom": 4,
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "backgroundOpacity": 0,
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "bottom": "0.04%",
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "toolTipFontColor": "#606060",
  "toolTipBorderRadius": 3,
  "transparencyActive": true,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "maxHeight": 128,
  "toolTipFontSize": 12,
  "right": "0.06%",
  "toolTipPaddingRight": 6
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "class": "Player",
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_24911063_072C_C7E1_4199_E02E12FABE48.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "paddingBottom": 0,
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})