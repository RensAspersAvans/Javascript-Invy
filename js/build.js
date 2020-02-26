
class warehouse 
{
    //instance variables

    //constructor

    //functions
}
  
  // function that builds a grid in the "container"
   function createGrid() {
    for (var rows = 0; rows < 15; rows++) {
        for (var columns = 0; columns < 15; columns++) {
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

    let parentWidth = document.getElementById('grid').offsetWidth;

    Array.from(gridItems).forEach(element => {
        element.style.width = parentWidth / 15;
        element.style.height = parentWidth / 15;
    });
};