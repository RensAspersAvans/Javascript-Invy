class warehouse 
{
    //instance variables

    //constructor
    constructor()
    {
        this.createGrid();
    }

    //functions
    createGrid() {
    var x = 15;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            var node = document.createElement("div");
            node.classList.add("grid-item");
            document.getElementById("grid").appendChild(node);
        };
    };
    let gridItems = document.getElementsByClassName('grid-item');

    Array.from(gridItems).forEach(element => {
        element.style.width = 960 / x;
        element.style.height = 960 / x;
    });

    };
}

let wh = new warehouse();

   