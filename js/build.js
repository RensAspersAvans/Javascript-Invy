
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
            var node = document.createElement("div");
            node.classList.add("grid-item");
            document.getElementById("grid").appendChild(node);
        };
    };
    let gridItems = document.getElementsByClassName('grid-item');

    // for (let index = 0; index < gridItems.length; index++) {
    //     const element = array[index];
    //     element.width(960/x);
    //     element.height(960/x);
    // }

    Array.from(gridItems).forEach(element => {
        element.style.width = 960 / x;
        element.style.height = 960 / x;
    });
};