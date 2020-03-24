import {WareHouse} from "../model/Warehouse";
import {Regios} from "../model/Regios";

let clothing;
let tierlantin;
let decoration;

//region Initialize maps
const clothingMap = new Array(
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
);

const tierlatinMap = new Array(
    ["@", null, null, null, null, null, null, "#", null, null, null, null, null, null, "@"],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ["@", null, null, null, null, null, null, "#", null, null, null, null, null, null, "@"]
);

const decorationMap = new Array(
    ["@", null, null, null, null, null, null, "#", null, null, null, null, null, null, "@"],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, "@", null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, "@", null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ["@", null, null, null, null, null, null, "#", null, null, null, null, null, null, "@"]
);
//endregion

window.onload = function() {
    if (localStorage.getItem('regios') == null)
    {
        clothing = new WareHouse("kleding", null, null);
        clothing.map = clothingMap;
        clothing.items = [];
        Regios.addRegio(clothing);
        tierlantin = new WareHouse("tierlatijn", null, null);
        tierlantin.map = tierlatinMap;
        tierlantin.items = [];
        Regios.addRegio(tierlantin);
        decoration = new WareHouse("decoratie", null, null);
        decoration.map = decorationMap;
        decoration.items = [];
        Regios.addRegio(decoration);
    } else
    {
        clothing = Regios.getRegio("kleding");
        tierlantin = Regios.getRegio("tierlatijn");
        decoration = Regios.getRegio("decoratie");
    }
    WareHouse.showMap(clothing.map);
    WareHouse.showItems();
};

export function switchInterface()
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
    WareHouse.showItems();
}


