'use strict';

var canvas = document.createElement('canvas');
canvas.width  = 400;
canvas.height = 600;
canvas.style = 'border: medium dashed green';

var resetBtn = document.createElement('button');
var resetBtnTxt = document.createTextNode('Reset');
resetBtn.appendChild(resetBtnTxt);
document.body.appendChild(resetBtn);

var eraseBtn = document.createElement('button');
var eraseBtnTxt = document.createTextNode('eraser');
eraseBtn.appendChild(eraseBtnTxt);
document.body.appendChild(eraseBtn);

var drawBtn = document.createElement('button');
var drawBtnTxt = document.createTextNode('draw');
drawBtn.appendChild(drawBtnTxt);
document.body.appendChild(drawBtn);

var hidden = document.createElement('canvas');
hidden.width = 40;
hidden.height = 60;

var mousedown = false;

var hiddenContext = hidden.getContext('2d');
var imageData;
var context = canvas.getContext('2d');

document.body.appendChild(canvas);
document.body.appendChild(hidden);
var rect = canvas.getBoundingClientRect();

require(['paint'], function(paint){
  var state = 'draw';

  resetBtn.addEventListener('click', function(){
    state = 'draw';

    imageData = hiddenContext.getImageData(0, 0, hidden.width, hidden.height);
    imageData.data.set(paint.reset(hidden.width, hidden.height));
    hiddenContext.putImageData(imageData, 0, 0);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
  })

  drawBtn.addEventListener('click', function(){
    state = 'draw';
  })

  eraseBtn.addEventListener('click', function(){
    state = 'erase';
  })
      var stitch = {
        color: {
          r:0, g:255, b:0
        },
        a: 255
      }

  canvas.addEventListener('mousedown', function(evt){
        mousedown = true;

        imageData = hiddenContext.getImageData(0, 0, hidden.width, hidden.height)
        paint.setData(imageData.data);

        var canvasPos = {
          x:  Math.floor((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
          y:  Math.floor((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height),
          width: canvas.width
        }

        var hiddenPos = {
          x: Math.floor(canvasPos.x / 10),
          y: Math.floor(canvasPos.y / 10),
          width: hidden.width
        }
          if (state === 'draw'){
            imageData.data.set(paint.draw(stitch, hiddenPos));

          } else {
            imageData.data.set(paint.erase(hiddenPos));
          }

          hiddenContext.putImageData(imageData, 0, 0)
          event.preventDefault();
      }, false);

  canvas.addEventListener('mousemove', function(evt){

    if (mousedown){
        var canvasPos = {
        x:  Math.floor((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
        y:  Math.floor((evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height),
        width: canvas.width
      }

      var hiddenPos = {
        x: Math.floor(canvasPos.x/10),
        y: Math.floor(canvasPos.y/10),
        width: hidden.width
      }

      if (state === 'draw'){
        imageData.data.set(paint.draw(stitch, hiddenPos));

      } else {
        imageData.data.set(paint.erase(hiddenPos));
      }

      hiddenContext.putImageData(imageData, 0, 0)
      event.preventDefault();
      drawStitches();
    }
  }, false);

  canvas.addEventListener('mouseup',   function(){
    mousedown = false;
    hiddenContext.putImageData(imageData, 0, 0);
    drawStitches();

  }, false);

  function drawStitches(){
      var stitches = paint.getImageArray(hidden.width, hidden.height);

      context.clearRect(1,1, canvas.width - 1, canvas.height);

      for (var i = 0; i < hidden.width; i ++){
        for (var j = 0; j < hidden.height; j ++){
          var x = i * 10 + 5;
          var y = j * 10 + 5;

          var stitch = stitches[i][j];



          if(stitch.a > 0){
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + 7, y + 7);
            context.strokeStyle = 'rgb(' + stitch.color.r + ',' + stitch.color.g + ','
              + stitch.color.b + ')';
            context.stroke()

            context.beginPath();
            context.moveTo(x + 7, y);
            context.lineTo(x, y + 7);
            context.stroke()
          }
        }
        // if (pixels[i + 3] > 0){ //greater than 130 gets rid of half
    }
  }
})
