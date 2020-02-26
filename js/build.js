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
       var totalBlocks = 15;
    for (var rows = 0; rows < totalBlocks; rows++) {
        for (var columns = 0; columns < totalBlocks; columns++) {
            var node = document.createElement("div");
            node.classList.add("grid-item");
            document.getElementById("grid").appendChild(node);
        };
    };
    let gridItems = document.getElementsByClassName('grid-item');

    let parentWidth = document.getElementById('grid').offsetWidth;

    Array.from(gridItems).forEach(element => {
        element.style.width = parentWidth / totalBlocks;
        element.style.height = parentWidth / totalBlocks;
    });


};

let wh = new warehouse();


   