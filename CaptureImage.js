import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios';
import querystring from 'querystring';
import global from '../global'
function CaptureImage (props) {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    props.takePhoto(dataUri);
  }
 
  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }

    />
  );
}
 
export default CaptureImage;