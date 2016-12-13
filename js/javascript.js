$(document).ready(function () {
  var r=$('<input/>').attr({
        type: "button",
        id: "reset",
        value: 'reset'
    });
  $('body').append("<p>Move your mouse over the grid to draw</p>");
  $('body').append(r);

  $('body').append("<div class='wrapper'></div>")
  makeDiv();

  $('#reset').click(function() {
    delDiv();
    makeDiv();
    hoverable();
  });
  hoverable();
});


function hex(x) {return ("0" + parseInt(x * .9).toString(16)).slice(-2);}

function promting(grid) {
  grid = prompt("Input the amount of grid you want on each side", "16");
  while(grid === null)
    grid = prompt("Input the amount of grid you want on each side", "16");
  return grid;
}

function makeDiv() {
  var grid;
  grid = promting(grid);
  for(var i = 0; i < grid; i++) {
    $('.wrapper').append("<div class='row'></div>");
    for(var j = 0; j < grid; j++) {
      $('div.wrapper > div:last-child').append("<div class='col'></div>");
    }
  }
}

function delDiv() {
  $('.wrapper').empty();
}

function hoverable() {
  $('.col').hover(function() {
    var rgb = $(this).css('background-color');
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    $(this).css('background-color',"#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]));
  });
}
