var canvas = document.createElement('canvas');
canvas.width  = 100;
canvas.height = 100;

var context = canvas.getContext('2d');

document.body.onload = function() {

context.beginPath();
context.moveTo(0, 0);
context.strokeStyle = 'rgba(100,0,100, .5)'
context.strokeWidth = 100;
context.lineTo(25,25);
context.stroke();

context.beginPath();
context.moveTo(10, 0);
context.strokeStyle = 'rgba(100, 0, 100, 1)'
context.strokeWidth = 100;
context.lineTo(35,25);
context.stroke();

var allPixelInfo = context.getImageData(0, 0, 100, 100).data;
var pixels = [];

for(var i = 0, loop = allPixelInfo.length; i < loop; i += 4) {
  var pixel = {
    r: allPixelInfo[i],
    g: allPixelInfo[i + 1],
    b: allPixelInfo[i + 2],
    a: allPixelInfo[i + 3]
  };
  pixels.push(pixel);
}
