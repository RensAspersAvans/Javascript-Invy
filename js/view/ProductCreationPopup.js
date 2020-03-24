import {Regios} from "../model/Regios";
import {WareHouse} from "../model/Warehouse";

const openFormButton = document.getElementById("open-create-popup");
const form = document.getElementById("form-popup");
const detailArea = document.getElementById("detailArea");
const nextButton = document.getElementById("next");
const name = document.getElementById("name");
const buyprice = document.getElementById("buyprice");
const sellprice = document.getElementById("sellprice");
const stock = document.getElementById("stock");
const minimumstock = document.getElementById("minimumstock");

export class ProductCreationPopup {

    constructor() {
        window.GlobalProductCreationIndex = 0;
        window.GlobalProductCreationArray = [];
        window.GlobalProductCreationClass = this;
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

    SaveFormStep1() {
        let returnvalue = false;

        if (name.value == "") {
            window.alert("Vul een productnaam in!");
        } else if (buyprice.value == "" || sellprice.value == "" || stock.value == "" || minimumstock.value == "") {
            window.alert("Vul alle waardes in!");
        } else if (buyprice.value <= 0 || sellprice.value <= 0) {
            window.alert("prijzen moeten hoger zijn dan 0!");
        } else if(stock.value < 0 || minimumstock.value < 0){
            window.alert("voorraden mogen niet lager dan 0 zijn!");
        } else {
            GlobalProductCreationArray[GlobalProductCreationIndex] = detailArea.value;
            let obj = {};
            let detailsArray = GlobalProductCreationArray.filter(element => {
                return element != "";
            });
            let elements = form.querySelectorAll("input");
            for (let index = 0; index < elements.length; index++) {
                let element = elements[index];
                if(element.value != "" && element.name != null && element.value != "#000000"){
                    let name = element.name;
                    let value = element.value;
                    obj [name] = value;
                }
                element.value = null;
            }
            obj["details"] = detailsArray;
            obj["picture"] = "";
            window.GlobalJson = obj;
            window.GlobalProductCreationArray = [];
            window.GlobalProductCreationIndex = 0;
            detailArea.value = null;
            returnvalue = true;
        }
        return returnvalue;
    }

    SaveFormStep2(){
        let obj = {};
        let elements = form.querySelectorAll("input, select");
        for (let index = 0; index < elements.length; index++) {
            let element = elements[index];
            if(element.value != "" && element.name != null && element.value != "#000000"){
                let name = element.name;
                let value = element.value;
                obj [name] = value;
            }
            element.value = null;
        }

        for(let key in obj){
            GlobalJson[key] = obj[key]
        }

        let selectedRegio = document.getElementById("regioSelect");
        let regio = Regios.getRegio(selectedRegio[selectedRegio.selectedIndex].innerText.toLowerCase());

        regio.items.push(GlobalJson);
        window.GlobalJson = null;
        Regios.updateRegio(regio);
        WareHouse.showItems();
        GlobalProductCreationClass.CloseForm();
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
        GlobalProductCreationClass.ResetForm()


    }

    ResetForm(){
        document.getElementById("regio1").style.display = "none";
        document.getElementById("regio2").style.display = "none";
        document.getElementById("regio3").style.display = "none";
        document.getElementById("nextform").style.display = "none";
        document.getElementById("step1").style.display = "flex";
    }

    UpdateBTW(e){
        let noBTW = e.target.value;
        let BTW = noBTW * 1.12;
        BTW = BTW.toFixed(2);
        document.getElementById("sellpricebtw").value = BTW;
    }

    ShowNextStep()
    {
        if(!GlobalProductCreationClass.SaveFormStep1()){
            return;
        }
        let selectedRegio = document.getElementById("regioSelect").options[document.getElementById("regioSelect").selectedIndex].text.toLowerCase();
        document.getElementById("step1").style.display = "none";
        document.getElementById("nextform").style.display = "block";
        let element = null;
       switch (selectedRegio) {
           case "kleding":
               element = document.getElementById("regio1");
               break;
           case "tierlatijn":
               element = document.getElementById("regio2");
               break;
           case "decoratie":
               element = document.getElementById("regio3");
               break;
       }
        element.style.display = "flex";
    }

}
