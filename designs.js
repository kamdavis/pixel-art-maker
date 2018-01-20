// Select color input
// Select size input

var heightInput = $('.height');
var widthInput = $('.width');
var button = $('.button');
//var color = $('.color-picker');
var canvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()

function makeGrid(){
  clearGrid();
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
}

function clearGrid(){
  $('tr').remove();
}

$(document).ready(function() {
  $('#sizePicker').submit(function(doIt) {
    doIt.preventDefault();
    button.unbind().click(makeGrid);

    $('#pixel_canvas td').bind("mouseover", function(change){
      var column_num = parseInt($(this).index()) + 1;
      var row_num = parseInt($(this).parent().index()) + 1;
      var cell_num = (((row_num - 1) * widthInput.val()) + column_num - 1);
      var all = $('td');
      var cell = $(all[cell_num]);
      var color = $('.color-picker').val();

      var original_color = cell.css('background-color');

      cell.css('background-color', color);

      $('#pixel_canvas td').click(function(change){
        var column_num = parseInt($(this).index()) + 1;
        var row_num = parseInt($(this).parent().index()) + 1;
        var cell_num = (((row_num - 1) * widthInput.val()) + column_num - 1);
        var all = $('td');
        var cell = $(all[cell_num]);
        color = $('.color-picker').val();

        cell.css('background-color', color);
        original_color = color;
      });

      cell.bind("mouseout", function(){
        cell.css('background-color', original_color);
      })

    });

  });
});
