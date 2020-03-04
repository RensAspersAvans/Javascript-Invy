var regio1 = 
    { "name": "Kleding", 
    "items": [ "nog geen items" ], 
    "map": [ 
        ["@", null, null, null, null, null, null, "#", null, null, null, null, null, null, "@"], 
        [null, "#", "#", "#", "#", "#", "#", "#", null, null, null, null, null, null, null], 
        [null, "#", null, null, null, null, null, "#", null, null, null, null, null, null, null], 
        [null, "#", null, null, null, null, null, "#", "#", "#", "#", "#", "#", "#", null], 
        [null, "#", null, null, null, null, null, "#", null, null, null, null, null, "#", null], 
        [null, "#", null, null, null, "@", null, "#", null, "@", null, null, null, "#", null], 
        [null, "#", null, null, null, null, null, "#", null, null, null, null, null, "#", null], 
        [null, "#", null, null, null, null, null, "#", null, null, null, null, null, "#", null], 
        [null, "#", "#", "#", "#", "#", "#", "#", null, null, null, null, null, "#", null], 
        [null, null, "#", null, null, null, null, "#", null, null, null, null, null, "#", null], 
        [null, null, "#", null, null, null, null, "#", "#", "#", "#", "#", "#", "#", null], 
        [null, null, "#", null, null, "@", null, "#", null, "@", null, null, "#", null, null], 
        [null, null, "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", null, null], 
        [null, null, null, null, null, null, null, "#", null, null, null, null, null, null, null], 
        ["@", null, null, null, null, null, null, "#", null, null, null, null, null, null, "@"], 
    ]
    }

class WareHouse 
{
    //constructor
    constructor(json)
    {
        this.jsonfile = json;
    }

    //functions
    createGrid(json) {
        //read json and draw warehouse with json information
        var size = 15;
        for (var rows = 0; rows < size; rows++) {
            var temp = this.jsonfile.map[rows];
            for (var columns = 0; columns < size; columns++) {
                var node = document.createElement("div");
                node.classList.add("grid-item");
                node.style.backgroundColor = "lightgrey";
                switch (temp[columns]) {
                    case "@":
                        node.style.backgroundColor = "red";
                        break;
                    case "#":
                        node.style.backgroundColor = "grey";
                    break;
                    default:
                        break;
                }
                document.getElementById("grid").appendChild(node);
            };
        };
        let gridItems = document.getElementsByClassName('grid-item');

        Array.from(gridItems).forEach(element => {
            element.style.width = 960 / size;
            element.style.height = 960 / size;
        });
    }
}

window.onload = function() {
    var temp = new WareHouse(regio1);
    temp.createGrid();
};

// function switchView(regio){
//     switch (regio) {
//         case r1:
//             var temp = new WareHouse(regio1);
//             temp.createGrid();
//         break;

//         case r2:
//             var temp = new WareHouse(regio2);
//             temp.createGrid();
//         break;

//         case r3:
//             var temp = new WareHouse(regio3);
//             temp.createGrid();
//         break;

//         default:
//             break;
//     }
// }

   
