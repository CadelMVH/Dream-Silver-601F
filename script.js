TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_1_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_1_t.jpg"
   }
  ],
  "partial": false,
  "frameDisplayTime": 1700,
  "id": "panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "R0012442-edit",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1345.25,
    "x": 2036.25,
    "angle": 72.37,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_t.png",
     "width": 3474,
     "maximumZoomFactor": 1.2,
     "height": 1815,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F738CD76_F64E_D8EB_41C4_774E9F2FA6D5",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 960.93,
        "height": 90,
        "x": 1673.77,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F6B92760_F64F_68E7_41E5_21C4E3A96AF1",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1300.26,
        "height": 90,
        "x": 1991.28,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F65730F0_F64F_29E6_41C7_B9AE21500671",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 495.5,
        "height": 90,
        "x": 1772.91,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F648DD7B_F64F_58DA_41EB_20BAE31BBDE2",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 448.08,
        "height": 90,
        "x": 1215.38,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F1E68853_F64F_382A_41AE_B6B2936A8F43",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 770.74,
        "height": 90,
        "x": 1219.34,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F6DCFD3F_F64E_F85A_41CB_773F3BB4B8EB",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 976.57,
        "height": 90,
        "x": 1227.07,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F65B89EB_F651_5BFA_41E8_0A8176C88861",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1165.04,
        "height": 90,
        "x": 541.03,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
        "x": 510.79,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F66ABD24_F651_F86E_41D5_44A38930ADAD",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 746.34,
        "height": 90,
        "x": 830.36,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F6BDA3C3_F651_6829_41AF_E4007AC10D07",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 778.13,
        "height": 90,
        "x": 688.27,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F631EC4D_F652_D83E_41D2_F27BEA4E0303",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1148.55,
        "height": 90,
        "x": 827.09,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F6A42F78_F653_58E7_41E8_64A59616D8C9",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 790.33,
        "height": 90,
        "x": 2370.81,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F64CD185_F653_2829_41B4_2F22CFCD45F3",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 532.1,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F72F5F82_F653_D82A_41E0_C0BEBEB4C87C",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1249.4,
        "height": 90,
        "x": 2353.11,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F66F2398_F653_2827_41D2_BBB95A9ACEE6",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 974.51,
        "height": 90,
        "x": 2523.2,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F6028B4F_F653_783A_41D1_3EE2EDAE441C",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1228.79,
        "height": 90,
        "x": 2838.99,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_F6829F29_F653_3879_41C7_BBB43F9D4048",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 505.12,
        "height": 90,
        "x": 2831.09,
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
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
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
       "useHandCursor": true
      }
     ],
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
     "fieldOfViewOverlayRadiusScale": 0.15,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "id": "map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D",
     "label": "Gerard Floorplan",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.24,
     "minimumZoomFactor": 0.5
    }
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation"
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "class": "ViewerArea",
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadBorderColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "progressBarOpacity": 1,
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipDisplayTime": 600,
   "paddingBottom": 0,
   "toolTipPaddingLeft": 6,
   "playbackBarBorderSize": 2,
   "playbackBarBorderColor": "#AAAAAA",
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadWidth": 6,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressBottom": 2,
   "shadow": false,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "paddingLeft": 0,
   "paddingRight": 0,
   "toolTipBorderRadius": 3,
   "progressHeight": 20,
   "toolTipShadowOpacity": 1,
   "toolTipFontFamily": "Arial",
   "playbackBarHeadBorderSize": 0,
   "toolTipOpacity": 1,
   "playbackBarRight": 0,
   "toolTipPaddingRight": 6,
   "minHeight": 1,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadow": true,
   "paddingTop": 0,
   "toolTipBorderColor": "#767676",
   "progressBorderSize": 2,
   "toolTipBorderSize": 1,
   "progressBarBorderSize": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadShadowColor": "#000000",
   "transitionDuration": 500,
   "toolTipShadowVerticalLength": 0,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBackgroundOpacity": 1,
   "playbackBarBottom": 0,
   "transitionMode": "blending",
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBorderRadius": 0,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressRight": 10,
   "height": "95.62%",
   "progressBorderRadius": 4,
   "playbackBarHeadHeight": 30,
   "width": "96.966%",
   "playbackBarLeft": 0,
   "progressOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipTextShadowOpacity": 0,
   "progressLeft": 10,
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBorderColor": "#AAAAAA",
   "progressBarBorderColor": "#000000",
   "playbackBarHeadOpacity": 1,
   "toolTipShadowHorizontalLength": 0,
   "minWidth": 1,
   "toolTipFontSize": 12,
   "top": "1.58%",
   "playbackBarBorderRadius": 4,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "toolTipFontWeight": "normal",
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarOpacity": 1,
   "borderRadius": 0,
   "id": "MapViewer",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "progressBarBorderRadius": 4,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "left": "1.29%",
   "borderSize": 0,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeight": 20,
   "playbackBarProgressOpacity": 1,
   "playbackBarProgressBorderColor": "#000000"
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 106.96,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.14,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -144.17,
   "pitch": 1.81
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
  "hfovMax": 136,
  "pitch": 0,
  "label": "R0012387",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1005.89,
    "x": 1718.71,
    "angle": 0,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -91.43,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.13,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera",
  "initialPosition": {
   "hfov": 124,
   "class": "PanoramaCameraPosition",
   "yaw": 61.59,
   "pitch": -4.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012389",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1021.54,
    "x": 1271.98,
    "angle": -24.48,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -71.87,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.28,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 143.24,
   "pitch": -0.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012391",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1209.97,
    "x": 585.98,
    "angle": -16.95,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 30.96,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.62,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 108.03,
   "pitch": -0.9
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012393",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 465.25,
    "x": 555.78,
    "angle": 274.18,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -13.87,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.4,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.01,
   "pitch": -3.09
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012390",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1193.47,
    "x": 872.04,
    "angle": -24.84,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 36.36,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.31,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.15,
   "pitch": -2.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_1_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_1_t.jpg"
   }
  ],
  "partial": false,
  "frameDisplayTime": 1000,
  "id": "panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "R0012399",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 791.33,
    "x": 875.34,
    "angle": 331.72,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 23.97,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.28,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.87,
   "pitch": -2.03
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012404",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 823.05,
    "x": 733.2,
    "angle": 113.6,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 21.04,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.86,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -108.3,
   "pitch": 0.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_2_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_1_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_2_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_3_t.jpg"
   }
  ],
  "partial": false,
  "frameDisplayTime": 1000,
  "id": "panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "label": "R0012407",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 540.46,
    "x": 1817.87,
    "angle": 0,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.12,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.91,
   "pitch": -0.24
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_1_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_1_t.jpg"
   }
  ],
  "partial": false,
  "frameDisplayTime": 2000,
  "id": "panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "label": "R0012415",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 493,
    "x": 1260.31,
    "angle": 0,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -48.49,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.31,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.62,
   "pitch": -5.21
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_1_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_1_t.jpg"
   }
  ],
  "partial": false,
  "frameDisplayTime": 2000,
  "id": "panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "label": "R0012420",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 815.69,
    "x": 1264.28,
    "angle": 237.9,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 145.41,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.41,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 18.18,
   "pitch": 1.88
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012426",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 835.32,
    "x": 2415.8,
    "angle": -36.66,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 31.19,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.72,
   "pitch": -3.08
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_1_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_1_t.jpg"
   }
  ],
  "partial": false,
  "frameDisplayTime": 2000,
  "id": "panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
  "pitch": 0,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "label": "R0012427",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 577.01,
    "x": 2420.96,
    "angle": 287.04,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -103.94,
     "path": "longest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.75,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -47.08,
   "pitch": -0.89
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012433",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1294.32,
    "x": 2398.03,
    "angle": 39.06,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.23,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.06,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 141.99,
   "pitch": -6.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_F474F230_F6B3_2867_41E3_224533737005",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012431",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1019.43,
    "x": 2568.18,
    "angle": 283.48,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 151.92,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.43,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F474F230_F6B3_2867_41E3_224533737005_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.45,
   "pitch": -5.39
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012436",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1273.76,
    "x": 2883.93,
    "angle": -190.55,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -147.47,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.11,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.9,
   "pitch": -2.12
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012439",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 550.11,
    "x": 2876.06,
    "angle": -236.3,
    "map": "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 80,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.08,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 146.65,
   "pitch": -0.95
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EACD6EDE_E610_0C78_41D2_A01B212B0564",
    "media": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EACD6EDE_E610_0C78_41D2_A01B212B0564, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAF4DEDE_E610_0C78_41D8_6491B7DD515B",
    "media": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAF4DEDE_E610_0C78_41D8_6491B7DD515B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAF50EDE_E610_0C78_41DC_1B9D10E2436C",
    "media": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAF50EDE_E610_0C78_41DC_1B9D10E2436C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAF58EDE_E610_0C78_41C8_4069EA5B2AC0",
    "media": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAF58EDE_E610_0C78_41C8_4069EA5B2AC0, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFA1EDE_E610_0C78_41E0_9F6011DCA41A",
    "media": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFA1EDE_E610_0C78_41E0_9F6011DCA41A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFB5EDE_E610_0C78_41E8_8876CE589E6A",
    "media": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFB5EDE_E610_0C78_41E8_8876CE589E6A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFBDEDE_E610_0C78_41D9_FC166AFDE44F",
    "media": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFBDEDE_E610_0C78_41D9_FC166AFDE44F, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFAAEDE_E610_0C78_41DC_9F1551F84267",
    "media": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFAAEDE_E610_0C78_41DC_9F1551F84267, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFB3EDE_E610_0C78_41DB_F5E676B8945F",
    "media": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFB3EDE_E610_0C78_41DB_F5E676B8945F, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAF86EDE_E610_0C78_41DE_A02F28360E06",
    "media": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAF86EDE_E610_0C78_41DE_A02F28360E06, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAF8FEDE_E610_0C78_41D7_A1FC3392852C",
    "media": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAF8FEDE_E610_0C78_41D7_A1FC3392852C, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAF92EDE_E610_0C78_41E1_5E55929101B3",
    "media": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAF92EDE_E610_0C78_41E1_5E55929101B3, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAF9AEDE_E610_0C78_41CC_66E45EA4460E",
    "media": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAF9AEDE_E610_0C78_41CC_66E45EA4460E, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFE1EDE_E610_0C78_41A9_786FCA47C1A1",
    "media": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFE1EDE_E610_0C78_41A9_786FCA47C1A1, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFF7EDE_E610_0C78_41CB_D073FB4C10B4",
    "media": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFF7EDE_E610_0C78_41CB_D073FB4C10B4, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F474F230_F6B3_2867_41E3_224533737005_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFFCEDE_E610_0C78_41CD_CD5B0D08F483",
    "media": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFFCEDE_E610_0C78_41CD_CD5B0D08F483, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_EAFC5EDE_E610_0C78_41E7_76EAA92BD9C3",
    "media": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_EAFC5EDE_E610_0C78_41E7_76EAA92BD9C3, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 0, 1)",
    "camera": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 1, 2)",
    "camera": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 2, 3)",
    "camera": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 3, 4)",
    "camera": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 4, 5)",
    "camera": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 5, 6)",
    "camera": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 6, 7)",
    "camera": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 7, 8)",
    "camera": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 8, 9)",
    "camera": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 9, 10)",
    "camera": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 10, 11)",
    "camera": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 11, 12)",
    "camera": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 12, 13)",
    "camera": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 13, 14)",
    "camera": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 14, 15)",
    "camera": "this.panorama_F474F230_F6B3_2867_41E3_224533737005_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 15, 16)",
    "camera": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 16, 0)",
    "camera": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera"
   }
  ]
 },
 "this.map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D",
 {
  "class": "PlayList",
  "id": "playList_EAC85EDE_E610_0C78_41E2_DAD5CB46E55B",
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
  "scaleMode": "fit_inside",
  "label": "MTVGoldenwestvid4Lodge",
  "thumbnailUrl": "media/video_DCC79303_D197_D47B_41C9_556DC56FB1AB_t.jpg",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_DCC79303_D197_D47B_41C9_556DC56FB1AB.mp4",
   "width": 1920,
   "height": 1080
  },
  "width": 1920,
  "id": "video_DCC79303_D197_D47B_41C9_556DC56FB1AB",
  "loop": false,
  "height": 1080
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "playList_EAC89EDE_E610_0C78_41E8_C91D374506D1",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_DCC79303_D197_D47B_41C9_556DC56FB1AB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EAC89EDE_E610_0C78_41E8_C91D374506D1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EAC89EDE_E610_0C78_41E8_C91D374506D1, 0, this.video_DCC79303_D197_D47B_41C9_556DC56FB1AB)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_EAC92EDE_E610_0C78_41DF_125141D7C42F",
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
  "class": "SlideInEffect",
  "duration": 1700,
  "id": "effect_C9C407BA_D1BD_5B8A_41CF_4D5679498390",
  "easing": "linear",
  "from": "bottom"
 },
 {
  "class": "SlideOutEffect",
  "duration": 1700,
  "id": "effect_C9C4E7BA_D1BD_5B8A_41DC_ACAD79DE36F0",
  "easing": "linear",
  "to": "top"
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipDisplayTime": 600,
  "paddingBottom": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 2,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBottom": 1,
  "shadow": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "paddingRight": 0,
  "toolTipBorderRadius": 3,
  "progressHeight": 20,
  "toolTipShadowOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "toolTipOpacity": 1,
  "playbackBarRight": 0,
  "toolTipPaddingRight": 6,
  "minHeight": 50,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "paddingTop": 0,
  "toolTipBorderColor": "#767676",
  "progressBorderSize": 2,
  "toolTipBorderSize": 1,
  "progressBarBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionDuration": 500,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundOpacity": 0.47,
  "playbackBarBottom": 10,
  "transitionMode": "blending",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressRight": 10,
  "progressBorderRadius": 4,
  "playbackBarHeadHeight": 30,
  "playbackBarLeft": 0,
  "progressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipTextShadowOpacity": 0,
  "progressLeft": 10,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderColor": "#AAAAAA",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "minWidth": 100,
  "toolTipFontSize": 12,
  "top": 0,
  "playbackBarBorderRadius": 4,
  "toolTipPaddingLeft": 6,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderRadius": 0,
  "id": "MainViewer",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "bottom": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeight": 20,
  "right": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderColor": "#000000"
 },
 {
  "class": "Image",
  "maxHeight": 1094,
  "horizontalAlign": "center",
  "width": "11.473%",
  "paddingBottom": 0,
  "height": "18.868%",
  "url": "skin/Image_BF8C61F9_B27E_A398_41C7_283E39454868.png",
  "scaleMode": "fit_inside",
  "shadow": false,
  "click": "this.openLink(\"http://www.mtviewhomes.com\", \"_blank\")",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 1096,
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Image_BF8C61F9_B27E_A398_41C7_283E39454868",
  "data": {
   "name": "MTView Homes Cap"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "minHeight": 1,
  "borderRadius": 0,
  "bottom": "0.05%",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "0.02%"
 },
 {
  "class": "Label",
  "horizontalAlign": "center",
  "textShadowOpacity": 1,
  "fontSize": 50,
  "width": 455.35,
  "paddingBottom": 0,
  "textDecoration": "none",
  "textShadowHorizontalLength": -3,
  "fontFamily": "Arial",
  "text": "Dream Silver 601F",
  "textShadowVerticalLength": 4,
  "shadow": false,
  "fontWeight": "bold",
  "fontStyle": "normal",
  "minWidth": 30,
  "top": "95.2%",
  "fontColor": "#000000",
  "bottom": "0%",
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "label4056",
  "data": {
   "name": "Model Name"
  },
  "verticalAlign": "middle",
  "textShadowColor": "#CCCCCC",
  "minHeight": 16,
  "borderRadius": 0,
  "borderSize": 0,
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": "1.73%"
 },
 {
  "class": "ThumbnailList",
  "horizontalAlign": "left",
  "itemLabelFontFamily": "Arial",
  "itemLabelGap": 9,
  "itemPaddingRight": 3,
  "selectedItemLabelFontWeight": "bold",
  "selectedItemLabelFontColor": "#FFCC00",
  "width": 150,
  "itemPaddingTop": 3,
  "itemLabelFontWeight": "normal",
  "paddingBottom": 10,
  "scrollBarWidth": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowColor": "#000000",
  "height": "80.004%",
  "layout": "vertical",
  "scrollBarMargin": 2,
  "itemThumbnailShadowOpacity": 0.54,
  "rollOverItemBackgroundOpacity": 0,
  "itemMode": "normal",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "shadow": false,
  "itemThumbnailShadowVerticalLength": 3,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "4.95%",
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadow": true,
  "paddingLeft": 20,
  "paddingRight": 20,
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemBackgroundColor": [],
  "itemThumbnailOpacity": 1,
  "borderSize": 0,
  "borderRadius": 5,
  "id": "ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B",
  "itemThumbnailWidth": 75,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "minHeight": 20,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "scrollBarVisible": "rollOver",
  "itemBorderRadius": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingLeft": 3,
  "backgroundOpacity": 0,
  "itemThumbnailShadowSpread": 1,
  "playList": "this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist",
  "itemBackgroundColorRatios": [],
  "itemLabelFontStyle": "normal",
  "paddingTop": 10,
  "itemPaddingBottom": 3,
  "gap": 10,
  "itemLabelFontSize": 14,
  "itemThumbnailShadowBlurRadius": 8,
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemThumbnailBorderRadius": 50,
  "itemLabelPosition": "bottom",
  "right": "0.02%",
  "rollOverItemLabelFontWeight": "normal",
  "itemBackgroundColorDirection": "vertical",
  "scrollBarColor": "#FFFFFF"
 },
 {
  "class": "IconButton",
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "horizontalAlign": "center",
  "mode": "toggle",
  "toolTipFontStyle": "normal",
  "width": 58.65,
  "toolTipDisplayTime": 600,
  "paddingBottom": 0,
  "iconURL": "skin/IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721.png",
  "height": 57.4,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "shadow": false,
  "toolTipFontSize": 12,
  "transparencyActive": true,
  "minWidth": 1,
  "toolTipFontWeight": "normal",
  "cursor": "hand",
  "maxWidth": 128,
  "paddingRight": 0,
  "toolTipBorderRadius": 3,
  "toolTipShadowOpacity": 1,
  "paddingLeft": 0,
  "toolTip": "Fullscreen",
  "toolTipFontFamily": "Arial",
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "toolTipOpacity": 1,
  "borderSize": 0,
  "id": "IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721",
  "toolTipPaddingRight": 6,
  "minHeight": 1,
  "borderRadius": 0,
  "bottom": "0%",
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "toolTipBorderColor": "#767676",
  "toolTipBorderSize": 1,
  "right": "0.02%",
  "maxHeight": 128,
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6
 },
 {
  "class": "Container",
  "children": [
   "this.MapViewer"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "42.589%",
  "paddingBottom": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "height": "43.086%",
  "overflow": "scroll",
  "layout": "absolute",
  "scrollBarMargin": 2,
  "shadow": false,
  "minWidth": 1,
  "bottom": "4.48%",
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "visible": false,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "Container12965"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "right": "23.5%",
  "creationPolicy": "inAdvance",
  "gap": 10
 },
 {
  "rollOverBackgroundOpacity": 0,
  "class": "Button",
  "iconHeight": 40,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "horizontalAlign": "center",
  "fontSize": 18,
  "mode": "toggle",
  "width": 188.73,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "height": 49.48,
  "shadowSpread": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "pressedShadow": false,
  "fontFamily": "Arial",
  "iconWidth": 40,
  "iconURL": "skin/Button_C6D31658_D18B_FC81_41C5_FE2730022ECC.png",
  "textDecoration": "none",
  "pressedBackgroundOpacity": 0,
  "pressedIconURL": "skin/Button_C6D31658_D18B_FC81_41C5_FE2730022ECC_pressed.png",
  "rollOverIconWidth": 40,
  "layout": "horizontal",
  "shadow": false,
  "shadowBlurRadius": 6,
  "click": "if(!this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE.get('visible')){ this.setComponentVisibility(this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE, true, 0, this.effect_C9C407BA_D1BD_5B8A_41CF_4D5679498390, 'showEffect', false) } else if(this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE.get('visible')){ this.setComponentVisibility(this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE, false, 0, this.effect_C9C4E7BA_D1BD_5B8A_41DC_ACAD79DE36F0, 'hideEffect', false) }",
  "fontWeight": "normal",
  "fontStyle": "normal",
  "minWidth": 0,
  "cursor": "hand",
  "bottom": "0.08%",
  "pressedShadowBlurRadius": 21,
  "paddingRight": 0,
  "pressedIconWidth": 40,
  "fontColor": "#FFFFFF",
  "paddingLeft": 0,
  "id": "Button_C6D31658_D18B_FC81_41C5_FE2730022ECC",
  "iconBeforeLabel": true,
  "data": {
   "name": "Button53065"
  },
  "verticalAlign": "middle",
  "shadowColor": "#000000",
  "borderColor": "#000000",
  "borderRadius": 0,
  "borderSize": 0,
  "pressedShadowColor": "#666666",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minHeight": 0,
  "rollOverIconHeight": 40,
  "label": "Toggle Floorplan",
  "gap": 0,
  "right": "41.7%",
  "pressedIconHeight": 40
 },
 {
  "class": "IconButton",
  "horizontalAlign": "center",
  "mode": "toggle",
  "width": 50,
  "paddingBottom": 0,
  "iconURL": "skin/IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF.png",
  "height": 49.5,
  "pressedIconURL": "skin/IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF_pressed.png",
  "shadow": false,
  "transparencyActive": true,
  "minWidth": 0,
  "cursor": "hand",
  "bottom": "0.08%",
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF",
  "data": {
   "name": "Button53070"
  },
  "verticalAlign": "middle",
  "borderRadius": 0,
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": "46.08%",
  "minHeight": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_EAC92EDE_E610_0C78_41DF_125141D7C42F.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721].forEach(function(component) { component.set('visible', false); }) }",
 "class": "Player",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.88,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "height": "100%",
 "overflow": "visible",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "existsKey": function(key){  return key in window; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } }
 },
 "buttonToggleFullscreen": "this.IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721",
 "shadow": false,
 "minWidth": 20,
 "paddingRight": 0,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player28156"
 },
 "mobileMipmappingEnabled": false,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10
})