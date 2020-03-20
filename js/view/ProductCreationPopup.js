import {Regios} from "../model/Regios";
import {WareHouse} from "../model/Warehouse";

const openFormButton = document.getElementById("open-create-popup");
const form = document.getElementById("form-popup");
const detailArea = document.getElementById("detailArea");
const nextButton = document.getElementById("next");

export class ProductCreationPopup {

    constructor() {
        window.GlobalProductCreationIndex = 0;
        window.GlobalProductCreationArray = [];
    }

    NextOrNewDetail() {
        if (GlobalProductCreationIndex >= GlobalProductCreationArray.length - 1) {
            GlobalProductCreationArray[GlobalProductCreationIndex] = detailArea.value;
            GlobalProductCreationIndex++;
            detailArea.value = null;
        } else {
            GlobalProductCreationArray[GlobalProductCreationIndex] = detailArea.value;
            GlobalProductCreationIndex++;
            detailArea.value = GlobalProductCreationArray[GlobalProductCreationIndex];
        }
        if (GlobalProductCreationArray.length >= GlobalProductCreationIndex) {
            nextButton.textContent = "+";
        } else {
            nextButton.textContent = ">";
        }
    }

    PreviousDetail() {
        if (GlobalProductCreationIndex == 0) {
            return;
        } else {
            if (detailArea.value != "") {
                GlobalProductCreationArray[GlobalProductCreationIndex] = detailArea.value;
            }
            GlobalProductCreationIndex--;
            detailArea.value = GlobalProductCreationArray[GlobalProductCreationIndex];
            nextButton.textContent = ">";
        }
    }

    SaveForm(event) {

        if (document.getElementById("newName").value == "") {
            window.alert("Vul een productnaam in!");
            return;
        } else if (document.getElementById("newPrice").value == "") {
            window.alert("Vul een prijs in!");
            return;
        } else if (document.getElementById("newPrice").value <= 0) {
            window.alert("Prijs moet hoger zijn dan 0!");
            return;
        } else {
            GlobalProductCreationArray[GlobalProductCreationIndex] = detailArea.value;
            let obj = {};
            let detailsArray = GlobalProductCreationArray.filter(element => {
                return element != "";
            });
            let elements = form.querySelectorAll("input");
            for (let index = 0; index < elements.length; index++) {
                let element = elements[index];
                let name = element.name;
                let value = element.value;
                obj [name] = value;
                element.value = null;
            }
            obj["details"] = detailsArray;
            obj["picture"] = "";
            let jsonstr = JSON.stringify(obj);
            let selectedRegio = document.getElementById("regioSelect");
            let regio = Regios.getRegio(selectedRegio[selectedRegio.selectedIndex].innerText.toLowerCase());

            regio.items.push(JSON.parse(jsonstr));
            Regios.updateRegio(regio);
            WareHouse.showItems();
            form.style.display = "none";
            openFormButton.style.display = "block";
            window.GlobalProductCreationArray = [];
            window.GlobalProductCreationIndex = 0;
            detailArea.value = null;
        }

    }

    OpenForm() {
        form.style.display = "block";
        openFormButton.style.display = "none";
        window.GlobalProductCreationArray = [];
        window.GlobalProductCreationIndex = 0;

    }

    CloseForm() {
        form.style.display = "none";
        openFormButton.style.display = "block";
        window.GlobalProductCreationArray = [];
        window.GlobalProductCreationIndex = 0;
        detailArea.value = null;
    }

    UpdateBTW(e){
        let noBTW = e.target.value;
        let BTW = noBTW * 1.12;
        BTW = BTW.toFixed(2);
        document.getElementById("sellpricebtw").value = BTW;
    }

}
