// Select color input
// Select size input

var heightInput = $('.height');
var widthInput = $('.width');
var button = $('.button');
var color = $('.color-picker');
var canvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()

function makeGrid(){
  var m = $('.height').val();
  console.log(m);
  var n = $('.width').val();
  console.log(n);
  for(var x = 0;x < m;x++){
    canvas.append('<tr>');
    console.log('madeit');
  }
  for(var y = 0;y < n;y++){
    $('tr').append('<td>');
    console.log('madeit');
  }
  widthInput.css('background-color', 'rgb(230, 31, 162)');
}

function clearGrid(){
  $('tr').remove();
}

$(document).ready(function() {
  $('#sizePicker').submit(function(doIt) {
    doIt.preventDefault();
    clearGrid();
    button.unbind().click(makeGrid);
  });
});

canvas.hover(function backgroundHover() {
  canvas.css('background-color', '#f5f5f5,');
});
