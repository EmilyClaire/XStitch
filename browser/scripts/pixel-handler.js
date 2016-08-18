'use strict';

//position = x, y, width
//color = r, b, g

function getPixel(data, pos){
  var position = getPixelPosition(pos.x, pos.y, pos.width);
  return {
        a: data[position + 3],
        position: {
          pixelPosition : position,
          x: pos.x,
          y: pos.y
        },
        color: {
          r: data[position],
          g: data[position + 1],
          b: data[position + 2]
        }
      };
}

function setPixel(data, pos, color, a){
  var position = getPixelPosition(pos.x, pos.y, pos.width);
  setColor(data, position, color, a);

  return data;
}

function clearPixel(data, pos){
    var position = getPixelPosition(pos.x, pos.y, pos.width);
    setColor(data, position, {r: 0, g: 0, b: 0}, 0);
    return data;
}

function getPixelPosition(x, y, width){
  return (x % width + y * width) * 4;
}

var setColor = function(data, position, color, a){
  data[position] = color.r;
  data[position + 1] = color.g;
  data[position + 2] = color.b;
  data[position + 3] = a;
}

return module.exports = {
  setPixel: setPixel,
  clearPixel: clearPixel,
  getPixel: getPixel
}
