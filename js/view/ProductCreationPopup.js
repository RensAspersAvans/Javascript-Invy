import {Regios} from "../model/Regios";
import {WareHouse} from "../model/Warehouse";

const openFormButton = document.getElementById("open-create-popup");
const closeFormButton = document.getElementById("close-create-popup");
const saveFormButton = document.getElementById("saveForm");
const form = document.getElementById("form-popup");
const creationForm = document.getElementById("creationForm");
const detailArea = document.getElementById("detailArea");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

export class ProductCreationPopup {

    constructor(dt, index) {
        this.details = dt;
        this.detailIndex = index;
    }

    NextOrNewDetail() {
        if (this.detailIndex >= this.details.length - 1) {
            this.details[this.detailIndex] = detailArea.value;
            this.detailIndex++;
            detailArea.value = null;
        } else {
            this.details[this.detailIndex] = detailArea.value;
            this.detailIndex++;
            detailArea.value = this.details[this.detailIndex];
        }
        if (this.details.length >= this.detailIndex) {
            nextButton.textContent = "+";
        } else {
            nextButton.textContent = ">";
        }
    }

    PreviousDetail() {
        if (this.detailIndex == 0) {
            return;
        } else {
            if (detailArea.value != "") {
                this.details[this.detailIndex] = detailArea.value;
            }
            this.detailIndex--;
            detailArea.value = this.details[this.detailIndex];
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
            this.details[this.detailIndex] = detailArea.value;
            let jsonstr = this.ToJSON();
            let selectedRegio = document.getElementById("regioSelect");
            let regio = Regios.getRegio(selectedRegio[selectedRegio.selectedIndex].innerText.toLowerCase());

            regio.items.push(JSON.parse(jsonstr));
            Regios.updateRegio(regio);
            WareHouse.showItems();
            this.CloseForm();
        }

    }

    ToJSON() {
        let obj = {};
        let detailsArray = this.details.filter(element => {
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
        return JSON.stringify(obj);
    }

    OpenForm() {
        form.style.display = "block";
        openFormButton.style.display = "none";
        this.details = [];
        this.detailIndex = 0;

    }

    CloseForm() {
        form.style.display = "none";
        openFormButton.style.display = "block";
        this.details = [];
        this.detailIndex = 0;
        detailArea.value = null;
    }

}
