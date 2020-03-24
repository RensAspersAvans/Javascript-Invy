import {Regios} from "./Regios";

export class WareHouse
{
    //constructor
    constructor(name, items, map)
    {
        this.name = name;
        this.items = items;
        this.map = map;

    }

    //functions
    static showMap(map) {
        //read json and draw warehouse with json information
        if (map == null)
        {
            console.log("map is leeg");
            return;
        }

        var oldMap = document.getElementById("grid");
        while (oldMap.lastElementChild) {
            oldMap.removeChild(oldMap.lastElementChild);
        }

        var size = 15;
        for (var rows = 0; rows < size; rows++) {
            var temp = map[rows];
            for (var columns = 0; columns < size; columns++) {
                var node = document.createElement("div");
                node.classList.add("grid-item");
                node.id = rows + "-" + columns;
                node.style.backgroundColor = "lightgrey";
                switch (temp[columns]) {
                    case "@":
                        node.style.backgroundColor = "red";
                        break;
                    case "#":
                        node.style.backgroundColor = "grey";
                        break;
                    default:
                        if (/[a-z]\d/.test(temp[columns]))
                        {
                            node.style.backgroundColor = "yellow";
                            node.setAttribute('draggable', true);
                            node.classList.add(temp[columns]);
                            break;
                        }
                        node.classList.add("dropzone");
                        break;
                }
                document.getElementById("grid").appendChild(node);
            };
        };
        let gridItems = document.getElementsByClassName('grid-item');

        let parentWidth = document.getElementById('grid').offsetWidth;

        Array.from(gridItems).forEach(element => {
            element.style.width = parentWidth / size;
            element.style.height = parentWidth / size;
        });
    }

    static isStored(item)
    {
        let result = false;
        let optionRegios = document.getElementById("regioSelect");
        let selectedRegio = Regios.getRegio(optionRegios[optionRegios.selectedIndex].innerText.toLowerCase());

        for (let row = 0; row < 15; row++)
        {
            for (let col = 0; col < 15; col++)
            {
                if (selectedRegio.map[row][col] == item)
                {
                    result = true;
                }
            }
        }
        return result;
    }

    static showItems()
    {

        let oldItemList = document.getElementById("products");
        while (oldItemList.lastElementChild) {
            oldItemList.removeChild(oldItemList.lastElementChild);
        }

        let optionRegios = document.getElementById("regioSelect");
        let selectedRegio = Regios.getRegio(optionRegios[optionRegios.selectedIndex].innerText.toLowerCase());

        for (let item in selectedRegio.items)
        {
            var node = document.createElement("div");
            node.classList.add("product-item");
            node.classList.add("p-2");
            node.classList.add("border-bottom");
            node.classList.add("text-break");
            node.classList.add("p" + item);
            node.innerHTML = selectedRegio.items[item].name;
            if (this.isStored("p" + item))
            {
                node.style.backgroundColor = "orange";
            } else
            {
                node.style.backgroundColor = "green";
                node.setAttribute('draggable', true);
            }
            node.style.color = "white";
            node.style.fontWeight = "bold";

            document.getElementById("products").appendChild(node);
        }
    }

    static showInfoSelectedItem(itemCode)
    {
        //get currentregio
        let optionRegios = document.getElementById("regioSelect");
        let selectedRegio = Regios.getRegio(optionRegios[optionRegios.selectedIndex].innerText.toLowerCase());

        //get number from itemCode
        let reggex = /\d+/g;
        itemCode = parseInt(itemCode.match(reggex)[0]);

        // delete old selected item
        let oldItemList = document.getElementById("selected-products");
        while (oldItemList.lastElementChild) {
            oldItemList.removeChild(oldItemList.lastElementChild);
        }

        var itemName = document.createElement("p");
        itemName.classList.add('m-0');
        itemName.innerHTML = "<strong>Naam: </strong>" + selectedRegio.items[itemCode].name;
        var itemPrice = document.createElement("p");
        itemPrice.classList.add('m-0');
        itemPrice.innerHTML = "<strong>Prijs: </strong>" + selectedRegio.items[itemCode].price;


        document.getElementById("selected-products").append(itemName, itemPrice);
    }
}