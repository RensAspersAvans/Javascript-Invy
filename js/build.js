class warehouse 
{
    //instance variables

    //constructor
    constructor()
    {
        this.createGrid();
    }

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

    let parentWidth = document.getElementById('grid').offsetWidth;

    Array.from(gridItems).forEach(element => {
        element.style.width = parentWidth / 15;
        element.style.height = parentWidth / 15;
    });


};

let wh = new warehouse();


   