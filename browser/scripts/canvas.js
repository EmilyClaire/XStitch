'use strict';

var canvas = document.createElement('canvas');
canvas.width  = 1000;
canvas.height = 1000;

var context = canvas.getContext('2d');

document.body.appendChild(canvas);

//draw a border
context.lineWidth = 1;
context.strokeRect(0, 0, canvas.width, canvas.height);//for white background

canvas.addEventListener('mousemove', function(evt){
  var rect = canvas.getBoundingClientRect();

  if(mouseDown){
    var pos = {
      x:  Math.floor((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
      y:  Math.floor((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
canvas.addEventListener('mouseup',   function(){
  mouseDown = false;
  context.putImageData(paint.getImage(), 0, 0);
}, false);

var btm = document.createElement('canvas');
btm.width = 400;
btm.height = 600;
document.body.appendChild(btm);
var btmContext = btm.getContext('2d');

