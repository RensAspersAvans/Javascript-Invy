
class warehouse 
{
    //instance variables

    //constructor

    //functions
}
  
  
  
  
  // function that builds a grid in the "container"
   function createGrid() {
        var x = 15;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            document.getElementById("grid").append("<div class='grid-item'></div>");
        };
    };
    let gridItems = document.getElementsByClassName("grid-item");

    gridItems.forEach(element => {
        element.width(960/x);
        element.height(960/x);
    });
};