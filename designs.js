
function makeGrid(){
// Define size of grid
	const height = $('#input_height').val();
	const width = $('#input_width').val();
// Define canvas
	const canvas = $('#pixel_canvas');
	canvas.children().remove();
// Crate the grid
	var i = 1;
	while (i <= height) {
		canvas.append("<tr></tr>");
		for (let i =1; i <= width ; i++){
			canvas.children().last().append("<td></td>");
		}
		i++;
	}
}
// Calling makeGrid when size of grid is sumbitted
$('.submit').click(function(event){
	event.preventDefault();
	makeGrid();
// Disabling right-click menu for "rubber effect"
	$("td").contextmenu(function() {
    return false;
	});
// creating event listener on mouse, defining left & right click function
	$('td').mousedown(function(dual){
		switch (dual.which) {
			case 1:
				$(this).css( "background-color", document.getElementById("colorPicker").value);
				break;
			case 3:
				$(this).css("background-color", "#ffff");
				break;

			}

	});
});



