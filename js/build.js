class Regios
{
    constructor(kleding, tierlatijn, decocratie) {
        this.kleding = kleding;
        this.tierlatijn = tierlatijn;
        this.decocratie = decoratie;
        //make for each element in constructor a getter and setter.
    }

    static getRegios() {
        let regios;
        if (localStorage.getItem("regios") === null) {
            regios = [];
        } else {
            regios = JSON.parse(localStorage.getItem("regios"));
        }
        return regios;
    }

    static addRegio(regio) {
        const storedRegios = this.getRegios();

        for (let i in storedRegios)
        {
            if (storedRegios[i].name == regio.name)
            {
                storedRegios.splice(i, 1);
            }
        }
        storedRegios.push(regio);
        localStorage.setItem("regios", JSON.stringify(storedRegios));
    }

    static getRegio(regioname) {
        let regio;
        if (JSON.parse(localStorage.getItem("regios")) === null) {
            regio = [];
        } else {
            let regios = JSON.parse(localStorage.getItem('regios'));
            for (var index = 0; index < 3; index++)
            {
                if (regios[index].name.includes(regioname))
                {
                    regio = regios[index];
                }
            }
        }
        return regio;
    }

    static updateRegio(update) {
        const storedRegios = this.getRegios();

        for (let i in storedRegios)
        {
            if (storedRegios[i].name == update.name)
            {
                storedRegios[i] = update;
            }
        }
        localStorage.setItem("regios", JSON.stringify(storedRegios));
    }

}


class WareHouse
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
                    case "p":
                        node.style.backgroundColor = "yellow";
                        node.setAttribute('draggable', true);
                        break;
                    default:
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


}

    let kleding;
    let tierlatijn;
    let decoratie;

document.addEventListener("regioselect", switchInterface);


    //initializatie
    window.onload = function() {
        //very first time
        if (localStorage.getItem('regios') == null)
        {
            //initialize for the first time
            kleding = new WareHouse("kleding", null, null);
            kleding.map = kledingMap;
            kleding.items = [];
            Regios.addRegio(kleding);
            tierlatijn = new WareHouse("tierlatijn", null, null);
            tierlatijn.map = tierlatijnMap;
            tierlatijn.items = [];
            Regios.addRegio(tierlatijn);
            decoratie = new WareHouse("decoratie", null, null);
            decoratie.map = decoratieMap;
            decoratie.items = [];
            Regios.addRegio(decoratie);
        } else //load existing data
        {
            kleding = Regios.getRegio("kleding");
            tierlatijn = Regios.getRegio("tierlatijn");
            decoratie = Regios.getRegio("decoratie");
        }
        WareHouse.showMap(kleding.map);
    };

    function switchInterface()
    {
        var x = document.getElementById("regioSelect").selectedIndex;

        switch (x) {
            case 0:
                WareHouse.showMap(Regios.getRegio("kleding").map);
                break;
            case 1:
                WareHouse.showMap(Regios.getRegio("tierlatijn").map);
                break;
            case 2:
                WareHouse.showMap(Regios.getRegio("decoratie").map);
                break;
            default:
                break;
        }
    }



   
