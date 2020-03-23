import {Regios} from "../model/Regios";
import {WareHouse} from "../model/Warehouse";

const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productDetails = document.getElementById("product-details-list");
const canvas = document.getElementById("product-img");
const imgUploadBtn = document.getElementById("no-img");
const imgDiv = document.getElementById("product-img-div");
const loadedDiv = document.getElementById("loaded-img-div");
const ctx = canvas.getContext("2d");
const name = document.getElementById("details-name");
const buyprice = document.getElementById("details-buyprice");
const sellprice = document.getElementById("details-sellprice");
const btw = document.getElementById("details-sellpricebtw");
const stock = document.getElementById("details-stock");
const minimumstock = document.getElementById("details-minimumstock");
const form = document.getElementById("details-popup");
const detailArea = document.getElementById("show-detailArea");
const nextButton = document.getElementById("save-details");

export class ItemDetails
{
    constructor() {
        this.prevX = 0;
        this.currX = 0;
        this.prevY = 0;
        this.currY = 0;
        this.drawActive = false;
        this.productCode = null;
        this.selectedRegio = document.getElementById("regioSelect").options[document.getElementById("regioSelect").selectedIndex].text.toLowerCase();
        this.regio = null;
        this.loadedProduct = null;
        if(this.loadedProduct == null){
            imgUploadBtn.style.display = "none";
        }
        this.EmptySelected();
    }

    ShowDetails(itemCode){
        form.style.display = "block";
        this.regio = Regios.getRegio(this.selectedRegio);
        this.productCode = itemCode;
        this.loadedProduct = this.regio.items[itemCode];

        imgUploadBtn.style.display = "flow-root";
    }

    LoadItem(itemCode){
        //get number from itemCode
        let reggex = /\d+/g;
        itemCode = parseInt(itemCode.match(reggex)[0]);
        GlobalItemDetailShower.ShowDetails(itemCode);
        GlobalItemDetailShower.LoadPicture();
    }

    LoadPicture(){
        if(GlobalItemDetailShower.loadedProduct.picture != ""){
            loadedDiv.style.display = "block";
            let img = new Image();
                img.onload = function(){
                    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                    GlobalItemDetailShower.LoadImgOnCanvas(img);
                    GlobalItemDetailShower.InitDrawing();
            }
            img.src = this.loadedProduct.picture;
        }else{
            loadedDiv.style.display = "none";
        }
    }

    LoadImgOnCanvas(img){
        let sizer = Math.min((500/img.width),(500/img.height));
        canvas.width = 500;
        canvas.height = 500;
        canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width*sizer, img.height*sizer);
    }

    HandleFileSelect(evt) {
        let newFile = evt.target.files[0];
        if (!newFile.type.match('image.*')) {
            window.alert("gekozen bestand is niet van het juiste type!")
            return;
        }
        var reader = new FileReader();
        reader.onload = (function() {
          return function(e) {
            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            let buffer = new Image();
            buffer.src = e.target.result;
            buffer.onload = function(){
                GlobalItemDetailShower.LoadImgOnCanvas(buffer);
                GlobalItemDetailShower.InitDrawing();
                GlobalItemDetailShower.SaveImage();
                GlobalItemDetailShower.LoadPicture();
            }
          };
        })(newFile);
        reader.readAsDataURL(newFile);
    }

    InitDrawing(){
        canvas.addEventListener("mousemove", function(e){GlobalItemDetailShower.MouseMove(e)}, false);
        canvas.addEventListener("mousedown", function(e){GlobalItemDetailShower.MouseDown(e)}, false);
        canvas.addEventListener("mouseup", GlobalItemDetailShower.MouseUp, false);
        GlobalItemDetailShower.currX = 0;
        GlobalItemDetailShower.currY = 0;
        GlobalItemDetailShower.prevX = 0;
        GlobalItemDetailShower.prevY = 0;
    }

    MouseMove(e){
        if(GlobalItemDetailShower.drawActive){
            GlobalItemDetailShower.prevX = GlobalItemDetailShower.currX;
            GlobalItemDetailShower.prevY = GlobalItemDetailShower.currY;
            GlobalItemDetailShower.currX = e.clientX - canvas.getBoundingClientRect().left;
            GlobalItemDetailShower.currY = e.clientY - canvas.getBoundingClientRect().top;
            GlobalItemDetailShower.Draw();
        }
    }

    Draw(){
        ctx.beginPath();
        ctx.moveTo(GlobalItemDetailShower.prevX, GlobalItemDetailShower.prevY);
        ctx.lineTo(GlobalItemDetailShower.currX, GlobalItemDetailShower.currY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
        GlobalItemDetailShower.SaveImage();
    }

    MouseDown(e){
        GlobalItemDetailShower.prevX = GlobalItemDetailShower.currX;
        GlobalItemDetailShower.prevY = GlobalItemDetailShower.currY;
        GlobalItemDetailShower.currX = e.clientX - canvas.getBoundingClientRect().left;
        GlobalItemDetailShower.currY = e.clientY - canvas.getBoundingClientRect().top;
        GlobalItemDetailShower.drawActive = true;
    }

    MouseUp(){
        GlobalItemDetailShower.drawActive = false;
    }

    SaveImage(){
        GlobalItemDetailShower.loadedProduct.picture = canvas.toDataURL("image/png");
        GlobalItemDetailShower.regio.items[GlobalItemDetailShower.productCode] = GlobalItemDetailShower.loadedProduct;
        Regios.updateRegio(GlobalItemDetailShower.regio);
    }

    EmptySelected(){

        loadedDiv.style.display = "none";
        imgUploadBtn.style.display = "none";
    }

    SaveForm(event) {

        if (name.value == "") {
            window.alert("Vul een productnaam in!");
            return;
        } else if (buyprice.value == "" || sellprice.value == "" || stock.value == "") {
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
}
