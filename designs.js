//submit and canvas variables
var submit = $("input[type=submit]");
var canvas = $("#pixelCanvas");
//Function to make grid
function makeGrid(e) {
    e.preventDefault();
    //Find the canvas
    canvas.find("tbody").empty();
    //Height and width input
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();
    //Loop to make grid
    //Height
    for (var h = 0; h < height; h++) {
        canvas.find("tbody").append("<tr></tr>");
    }
    //Width
    canvas.find("tbody").children().each(function () {
        for (var w = 0; w < width; w++) {
            $(this).append("<td></td>");
        }
    });
}
//Submit gridsize button, fires makeGrid function
submit.click(makeGrid);
//Paint grid
canvas.on('mouseover mousedown', function (e) {
    e.preventDefault();
    if (e.which === 1) {
        e.target.style.backgroundColor = $('#colorPicker').val();
    }
});