import {Regios} from "../model/Regios";
import {WareHouse} from "../model/Warehouse";

const canvas = document.getElementById("product-img");
const imgUploadBtn = document.getElementById("no-img");
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
const NextButton = document.getElementById("details-next");

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
        window.GlobalProductShowIndex = 0;
        window.GlobalProductShowArray = [];
    }

    ShowDetails(itemCode){
        form.style.display = "block";
        this.regio = Regios.getRegio(document.getElementById("regioSelect").options[document.getElementById("regioSelect").selectedIndex].text.toLowerCase());
        this.productCode = itemCode;
        if (/\d/g.test(itemCode))
        {
            this.loadedProduct = this.regio.items[itemCode];
            let elements = form.querySelectorAll("input, select");
            for (let x = 0; x < elements.length; x++) {
                let element = elements[x];
                if(element.name != "getpicture"){
                    for (let y in this.loadedProduct){
                        if(element.name == y){
                            element.value = this.loadedProduct[y.toString()];
                            break;
                        }
                    }
                }

            }
            window.GlobalProductShowIndex = 0;
            window.GlobalProductShowArray = this.loadedProduct.details;
            if(GlobalProductShowArray.length > 0){
                detailArea.value = GlobalProductShowArray[0];
            }
            imgUploadBtn.style.display = "flow-root";

        }
    }

    LoadItem(itemCode){
        //get number from itemCode
        let reggex = /\d+/g;
        itemCode = parseInt(itemCode.match(reggex)[0]);
        GlobalItemDetailShower.ShowDetails(itemCode);
        GlobalItemDetailShower.LoadPicture();
    }

    LoadPicture(){
        if (GlobalItemDetailShower.loadedProduct != null)
        {
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


    SaveForm() {
        if (name.value == "") {
            window.alert("Vul een productnaam in!");
            return;
        } else if (buyprice.value == "" || sellprice.value == "" || stock.value == "" || minimumstock.value == "") {
            window.alert("Vul alle waardes in!");
            return;
        } else if (buyprice.value <= 0 || sellprice.value <= 0) {
            window.alert("prijzen moeten hoger zijn dan 0!");
            return;
        } else if(stock.value < 0 || minimumstock.value < 0){
            window.alert("voorraden mogen niet lager dan 0 zijn!");
            return;
        } else {
            GlobalProductShowArray[GlobalProductShowIndex] = detailArea.value;
            let obj = {};
            let detailsArray = GlobalProductShowArray.filter(element => {
                return element != "";
            });
            let elements = form.querySelectorAll("input, select");
            for (let index = 0; index < elements.length; index++) {
                let element = elements[index];
                let name = element.name;
                let value = element.value;
                obj [name] = value;
                element.value = null;
            }
            obj["details"] = detailsArray;

            for(let key in obj){
                GlobalItemDetailShower.loadedProduct[key] = obj[key]
            }

            GlobalItemDetailShower.regio.items[GlobalItemDetailShower.productCode] = GlobalItemDetailShower.loadedProduct;
            Regios.updateRegio(GlobalItemDetailShower.regio);
            GlobalItemDetailShower.CloseDetails();
            WareHouse.showItems();
        }
    }

    ShowNextDetails()
    {
        let selectedRegio = document.getElementById("regioSelect").options[document.getElementById("regioSelect").selectedIndex].text.toLowerCase();
        document.getElementById("detailfirst").style.display = "none";
        let element;
        switch (selectedRegio) {
            case "kleding":
                element = document.getElementById("detailregio1");
                document.getElementById("detailregio2").style.display = "none";
                document.getElementById("detailregio3").style.display = "none";
                break;
            case "tierlatijn":
                element = document.getElementById("detailregio2");
                document.getElementById("detailregio1").style.display = "none";
                document.getElementById("detailregio3").style.display = "none";
                break;
            case "decoratie":
                element = document.getElementById("detailregio3");
                document.getElementById("detailregio2").style.display = "none";
                document.getElementById("detailregio1").style.display = "none";
                break;
        }
        document.getElementById("detailsecond").style.display = "flex";
        element.style.display = "flex";
    }

    CloseDetails()
    {
        document.getElementById("detailregio1").style.display = "none";
        document.getElementById("detailregio2").style.display = "none";
        document.getElementById("detailregio3").style.display = "none";
        document.getElementById("detailsecond").style.display = "none";
        document.getElementById("detailfirst").style.display = "flex";
        document.getElementById("details-popup").style.display = "none";
    }

    NextOrNewDetail() {
        if (GlobalProductShowIndex >= GlobalProductShowArray.length - 1) {
            GlobalProductShowArray[GlobalProductShowIndex] = detailArea.value;
            GlobalProductShowIndex++;
            detailArea.value = null;
        } else {
            GlobalProductShowArray[GlobalProductShowIndex] = detailArea.value;
            GlobalProductShowIndex++;
            detailArea.value = GlobalProductShowArray[GlobalProductShowIndex];
        }
        if (GlobalProductShowArray.length >= GlobalProductShowIndex) {
            NextButton.textContent = "+";
        } else {
            NextButton.textContent = ">";
        }
    }

    PreviousDetail() {
        if (GlobalProductShowIndex == 0) {
            return;
        } else {
            if (detailArea.value != "") {
                GlobalProductShowArray[GlobalProductShowIndex] = detailArea.value;
            }
            GlobalProductShowIndex--;
            detailArea.value = GlobalProductShowArray[GlobalProductShowIndex];

            NextButton.textContent = ">";
        }
    }

    UpdateBTW(e){
        let noBTW = e.target.value;
        let BTW = noBTW * 1.12;
        BTW = BTW.toFixed(2);
        btw.value = BTW;
    }
}
