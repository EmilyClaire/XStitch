'use strict';

define(['pixel-handler'], function(pixel){
  var data = [];


  function draw (stitch, pos){
    return pixel.setPixel(data, pos, stitch.color, stitch.a);
  }

  function setData(arr){

    for (var i = 0; i < arr.length; i++) {
      data[i] = arr[i];
    }
  }

  function getImageArray(width, height){
    var arr = Array(width).fill().map(()=>Array(height).fill())


    var pos = {};

    for (var i = 0; i < width; i ++){
      for (var j = 0; j < height; j ++){
        pos.x = i;
        pos.y = j;
        pos.width = width;

        arr[i][j] = pixel.getPixel(data, pos);
      }
    }
    return arr;
  }

  return {
    draw: draw,
    setData: setData,
    getImageArray: getImageArray
  };
})
