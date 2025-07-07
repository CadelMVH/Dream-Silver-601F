TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B_t.jpg",
  "label": "R0012386",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.37,
   "pitch": -0.82
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -56.13,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.43
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_1_t.jpg",
  "label": "R0012442-edit",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 1700,
  "frameTransitionTime": 1000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_0_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_t.jpg",
  "label": "R0012387",
  "vfov": 180,
  "hfovMax": 136,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_t.jpg",
  "label": "R0012389",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_t.jpg",
  "label": "R0012391",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_t.jpg",
  "label": "R0012393",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_t.jpg",
  "label": "R0012390",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_t.jpg",
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
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_1_t.jpg",
  "label": "R0012399",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 1000,
  "frameTransitionTime": 1000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_0_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_t.jpg",
  "label": "R0012404",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_t.jpg",
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
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_2_t.jpg",
  "label": "R0012407",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 1000,
  "frameTransitionTime": 1000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_0_t.jpg",
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
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_1_t.jpg",
  "label": "R0012415",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 2000,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_0_t.jpg",
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
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_1_t.jpg",
  "label": "R0012420",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 2000,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_0_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_t.jpg",
  "label": "R0012426",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DED64990_D251_7C47_41D6_696AEB8A6079_t.jpg",
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
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_1_t.jpg",
  "label": "R0012427",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 2000,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_0_t.jpg",
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
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_t.jpg",
  "label": "R0012433",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_F474F230_F6B3_2867_41E3_224533737005",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_t.jpg",
  "label": "R0012431",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F474F230_F6B3_2867_41E3_224533737005_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_t.jpg",
  "label": "R0012436",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_t.jpg",
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
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_t.jpg",
  "label": "R0012439",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_t.jpg",
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
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B",
    "camera": "this.panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
    "camera": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
    "camera": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
    "camera": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
    "camera": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
    "camera": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
    "camera": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
    "camera": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
    "camera": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
    "camera": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
    "camera": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
    "camera": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
    "camera": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
    "camera": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
    "camera": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
    "camera": "this.panorama_F474F230_F6B3_2867_41E3_224533737005_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
    "camera": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
    "camera": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "end": "this.trigger('tourEnded')"
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
    "media": "this.panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B",
    "camera": "this.panorama_B8275BF8_B26D_A798_41E5_0AA15D2B8D3B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD",
    "camera": "this.panorama_D3AE1625_CDBF_A0AB_41D6_CFBE8918E1AD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 1, 2)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184",
    "camera": "this.panorama_D2CFF24F_D295_A0F8_418E_1D55D702D184_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E",
    "camera": "this.panorama_D39F50E2_D2B5_61A9_41E2_8B2880B9FE7E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964",
    "camera": "this.panorama_D102C38D_D29F_607B_41E7_B16C6FB02964_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62",
    "camera": "this.panorama_D11FF8D5_D29E_E1EB_41B0_1F8F00A3DA62_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0",
    "camera": "this.panorama_D64B4F61_D295_E0AB_419F_DC4B06D7B8F0_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A",
    "camera": "this.panorama_D70970CB_D293_61FF_41B8_D44C9D616B0A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 7, 8)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8",
    "camera": "this.panorama_D688E1BA_D3BD_E398_41D6_7FD8E69FDFA8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB",
    "camera": "this.panorama_DB50DDDB_D39E_E39F_41E0_3B7704A4C6DB_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 9, 10)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F",
    "camera": "this.panorama_CBC11485_D2FF_DC7E_41CB_B74D34E0DF3F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 10, 11)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9",
    "camera": "this.panorama_DEFEF5F1_D24F_37C9_41B0_125BC13B6FB9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 11, 12)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079",
    "camera": "this.panorama_DED64990_D251_7C47_41D6_696AEB8A6079_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE",
    "camera": "this.panorama_DEA475A1_D25F_D449_41D8_DD64EC381EEE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 13, 14)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E",
    "camera": "this.panorama_F4ED007F_F6B3_28D9_41E7_DAF6F56DBC0E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F474F230_F6B3_2867_41E3_224533737005",
    "camera": "this.panorama_F474F230_F6B3_2867_41E3_224533737005_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E",
    "camera": "this.panorama_F797DF00_F6B1_5826_41E8_2AAEF629A31E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C",
    "camera": "this.panorama_F6E3C200_F657_6827_41E1_6381AB7E739C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist, 17, 0)"
   }
  ]
 },
 {
  "class": "Map",
  "thumbnailUrl": "media/map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D_t.png",
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
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "label": "Gerard Floorplan",
  "maximumZoomFactor": 1.2,
  "width": 3474,
  "id": "map_C378D042_D18C_D4FA_41DF_4F4E45F76C4D",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "height": 1815,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "minimumZoomFactor": 0.5,
  "initialZoomFactor": 1,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "fieldOfViewOverlayOutsideColor": "#000000"
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "progressBottom": 2,
   "class": "ViewerArea",
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "toolTipPaddingLeft": 6,
   "transitionMode": "blending",
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "playbackBarHeadShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "paddingBottom": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "shadow": false,
   "playbackBarProgressOpacity": 1,
   "minHeight": 1,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarBottom": 0,
   "paddingLeft": 0,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarBorderSize": 2,
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBorderRadius": 0,
   "paddingTop": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBorderSize": 0,
   "progressBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipFontSize": 12,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBarBorderRadius": 4,
   "height": "95.62%",
   "playbackBarHeadShadow": true,
   "width": "96.966%",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 30,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "progressRight": 10,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeight": 20,
   "minWidth": 1,
   "progressBackgroundOpacity": 1,
   "top": "1.58%",
   "progressBorderRadius": 4,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressLeft": 10,
   "id": "MapViewer",
   "playbackBarBorderRadius": 4,
   "playbackBarHeadWidth": 6,
   "progressBorderColor": "#AAAAAA",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderColor": "#000000",
   "toolTipBorderRadius": 3,
   "progressOpacity": 1,
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 1,
   "toolTipFontStyle": "normal",
   "left": "1.29%",
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingRight": 0,
   "transitionDuration": 500,
   "playbackBarRight": 0,
   "playbackBarOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "progressHeight": 20
  }
 },
 {
  "class": "PlayList",
  "id": "playList_F697B07A_F67E_E8DA_41E8_8B8A0949E735",
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
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "playList_F697107A_F67E_E8DA_41D5_6D0A45F79CD1",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_DCC79303_D197_D47B_41C9_556DC56FB1AB",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_F697107A_F67E_E8DA_41D5_6D0A45F79CD1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_F697107A_F67E_E8DA_41D5_6D0A45F79CD1, 0, this.video_DCC79303_D197_D47B_41C9_556DC56FB1AB)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_F694E07A_F67E_E8DA_41D5_05AC0197B392",
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
  "id": "effect_C9C407BA_D1BD_5B8A_41CF_4D5679498390",
  "duration": 1700,
  "from": "bottom",
  "easing": "linear"
 },
 {
  "class": "SlideOutEffect",
  "id": "effect_C9C4E7BA_D1BD_5B8A_41DC_ACAD79DE36F0",
  "duration": 1700,
  "to": "top",
  "easing": "linear"
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "class": "ViewerArea",
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderSize": 2,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "shadow": false,
  "playbackBarProgressOpacity": 1,
  "minHeight": 50,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "paddingLeft": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderSize": 2,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderRadius": 0,
  "paddingTop": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4,
  "playbackBarHeadShadow": true,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 30,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "minWidth": 100,
  "progressBackgroundOpacity": 0.47,
  "top": 0,
  "progressBorderRadius": 4,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 10,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "id": "MainViewer",
  "playbackBarBorderRadius": 4,
  "playbackBarHeadWidth": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "bottom": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 1,
  "toolTipFontStyle": "normal",
  "left": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "paddingRight": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "progressHeight": 20,
  "right": 0
 },
 {
  "borderSize": 0,
  "class": "Image",
  "horizontalAlign": "center",
  "height": "18.868%",
  "width": "11.473%",
  "borderRadius": 0,
  "url": "skin/Image_BF8C61F9_B27E_A398_41C7_283E39454868.png",
  "click": "this.openLink(\"http://www.mtviewhomes.com\", \"_blank\")",
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 1096,
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "Image_BF8C61F9_B27E_A398_41C7_283E39454868",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "data": {
   "name": "MTView Homes Cap"
  },
  "verticalAlign": "middle",
  "bottom": "0.05%",
  "shadow": false,
  "paddingTop": 0,
  "maxHeight": 1094,
  "right": "0.02%",
  "paddingRight": 0
 },
 {
  "borderSize": 0,
  "class": "Label",
  "width": 455.35,
  "textShadowBlurRadius": 3,
  "horizontalAlign": "center",
  "fontSize": 50,
  "textDecoration": "none",
  "borderRadius": 0,
  "text": "Dream Silver 601F",
  "textShadowOpacity": 1,
  "fontFamily": "Arial",
  "fontStyle": "normal",
  "paddingBottom": 0,
  "fontWeight": "bold",
  "minWidth": 30,
  "top": "95.2%",
  "textShadowVerticalLength": 4,
  "minHeight": 16,
  "id": "label4056",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "data": {
   "name": "Model Name"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "shadow": false,
  "textShadowHorizontalLength": -3,
  "textShadowColor": "#CCCCCC",
  "fontColor": "#000000",
  "left": "1.73%",
  "paddingTop": 0,
  "paddingRight": 0
 },
 {
  "itemThumbnailScaleMode": "fit_outside",
  "borderSize": 0,
  "itemThumbnailShadowVerticalLength": 3,
  "shadow": false,
  "horizontalAlign": "left",
  "class": "ThumbnailList",
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 9,
  "width": 150,
  "itemThumbnailShadowBlurRadius": 8,
  "height": "80.004%",
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemLabelFontFamily": "Arial",
  "borderRadius": 5,
  "itemThumbnailShadowColor": "#000000",
  "scrollBarWidth": 10,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowOpacity": 0.54,
  "layout": "vertical",
  "itemThumbnailBorderRadius": 50,
  "itemMode": "normal",
  "rollOverItemBackgroundOpacity": 0,
  "selectedItemLabelFontColor": "#FFCC00",
  "paddingBottom": 10,
  "itemHorizontalAlign": "center",
  "top": "4.95%",
  "scrollBarMargin": 2,
  "minWidth": 20,
  "itemOpacity": 1,
  "rollOverItemLabelFontWeight": "normal",
  "itemVerticalAlign": "middle",
  "minHeight": 20,
  "id": "ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B",
  "itemLabelTextDecoration": "none",
  "backgroundOpacity": 0,
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemThumbnailShadow": true,
  "itemLabelFontStyle": "normal",
  "paddingLeft": 20,
  "itemLabelFontWeight": "normal",
  "itemThumbnailOpacity": 1,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "playList": "this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist",
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 75,
  "scrollBarOpacity": 0.5,
  "paddingTop": 10,
  "paddingRight": 20,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "itemPaddingBottom": 3,
  "right": "0.02%",
  "itemBackgroundColorRatios": [],
  "itemThumbnailWidth": 75,
  "itemBackgroundColor": [],
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "itemLabelPosition": "bottom"
 },
 {
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "class": "IconButton",
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "mode": "toggle",
  "toolTipPaddingLeft": 6,
  "width": 58.65,
  "toolTipPaddingTop": 4,
  "horizontalAlign": "center",
  "height": 57.4,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "borderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "iconURL": "skin/IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721.png",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 128,
  "toolTipPaddingBottom": 4,
  "minHeight": 1,
  "paddingBottom": 0,
  "toolTip": "Fullscreen",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "id": "IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721",
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
  "right": "0.02%",
  "paddingRight": 0,
  "toolTipPaddingRight": 6
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "gap": 10,
  "children": [
   "this.MapViewer"
  ],
  "horizontalAlign": "left",
  "height": "43.086%",
  "width": "42.589%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 0,
  "visible": false,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE",
  "paddingLeft": 0,
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container12965"
  },
  "verticalAlign": "top",
  "bottom": "4.48%",
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "right": "23.5%",
  "paddingRight": 0,
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "layout": "horizontal",
  "borderSize": 0,
  "label": "Toggle Floorplan",
  "iconBeforeLabel": true,
  "class": "Button",
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "shadowBlurRadius": 6,
  "gap": 0,
  "mode": "toggle",
  "width": 188.73,
  "horizontalAlign": "center",
  "height": 49.48,
  "fontSize": 18,
  "borderRadius": 0,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "shadowSpread": 1,
  "pressedIconWidth": 40,
  "rollOverIconHeight": 40,
  "fontStyle": "normal",
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "pressedBackgroundOpacity": 0,
  "fontWeight": "normal",
  "iconURL": "skin/Button_C6D31658_D18B_FC81_41C5_FE2730022ECC.png",
  "minWidth": 0,
  "pressedIconURL": "skin/Button_C6D31658_D18B_FC81_41C5_FE2730022ECC_pressed.png",
  "borderColor": "#000000",
  "rollOverIconWidth": 40,
  "cursor": "hand",
  "paddingBottom": 0,
  "pressedShadowBlurRadius": 21,
  "click": "if(!this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE.get('visible')){ this.setComponentVisibility(this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE, true, 0, this.effect_C9C407BA_D1BD_5B8A_41CF_4D5679498390, 'showEffect', false) } else if(this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE.get('visible')){ this.setComponentVisibility(this.Container_C42CB4BE_D18D_DD8A_41E8_36EF25B45EAE, false, 0, this.effect_C9C4E7BA_D1BD_5B8A_41DC_ACAD79DE36F0, 'hideEffect', false) }",
  "minHeight": 0,
  "shadow": false,
  "id": "Button_C6D31658_D18B_FC81_41C5_FE2730022ECC",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "data": {
   "name": "Button53065"
  },
  "verticalAlign": "middle",
  "bottom": "0.08%",
  "shadowColor": "#000000",
  "iconWidth": 40,
  "fontColor": "#FFFFFF",
  "paddingTop": 0,
  "iconHeight": 40,
  "pressedShadowColor": "#666666",
  "right": "41.7%",
  "rollOverBackgroundOpacity": 0,
  "paddingRight": 0,
  "pressedIconHeight": 40,
  "pressedShadow": false
 },
 {
  "borderSize": 0,
  "class": "IconButton",
  "mode": "toggle",
  "width": 50,
  "horizontalAlign": "center",
  "height": 49.5,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF_pressed.png",
  "iconURL": "skin/IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF.png",
  "minWidth": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "minHeight": 0,
  "shadow": false,
  "id": "IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF",
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "data": {
   "name": "Button53070"
  },
  "verticalAlign": "middle",
  "bottom": "0.08%",
  "transparencyActive": true,
  "left": "46.08%",
  "paddingTop": 0,
  "paddingRight": 0
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "class": "Player",
 "start": "this.syncPlaylists([this.ThumbnailList_BCE91332_B277_60A8_41C8_FFC085F3871B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_F694E07A_F67E_E8DA_41D5_05AC0197B392.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "vrPolyfillScale": 0.88,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_F7F592C5_F651_2829_41E5_12BC3A0628EF",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "paddingBottom": 0,
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "data": {
  "name": "Player28156"
 },
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_C516BF30_D1FB_EC96_41D3_0C388CF32721",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})