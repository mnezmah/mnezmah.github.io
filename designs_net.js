function makeGrid() {
//Get size input
  const tableHeight = $("#input_height").val();
  const tableWidth = $("#input_width").val();
//Set canvas
  const cnv = $("#pixel_canvas");
//Clear canvas
  cnv.children().remove();
//Create grid  (with a "while" and a "for" loop...)
  var i = 1;
  while (i <= tableHeight) {
    cnv.append( "<tr></tr>" );
    for (let i = 1; i <= tableWidth; i++) {
      cnv.children().last().append("<td></td>");
    }
    i++;
  }
}
// When size is submitted by the user, call makeGrid()
$("input:submit").click(function(event) {
  event.preventDefault();
  makeGrid();
//Switch off (right-click) contextmenu
  $("td").contextmenu(function() {
    return false;
  });

//Listening to mouse, define right and left click and set color
  $("td").mousedown(function(b) {
    switch (b.which) {
      case 1:
        $(this).css("background-color", document.getElementById("colorPicker").value);
        break;
      case 3:
        $(this).css("background-color", "#ffffff");
        break;
    }
  });

});
