import {Regios} from "../model/Regios";

const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productDetails = document.getElementById("product-details-list");
const canvas = document.getElementById("product-img");
const imgUploadBtn = document.getElementById("no-img");
const imgDiv = document.getElementById("product-img-div");
const loadedDiv = document.getElementById("loaded-img-div");
const ctx = canvas.getContext("2d");

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
        this.regio = Regios.getRegio(this.selectedRegio);
        this.productCode = itemCode;
        this.loadedProduct = this.regio.items[itemCode];
        productName.innerHTML = this.loadedProduct.name;
        productPrice.innerHTML = "Prijs: €" + this.loadedProduct.price + ".-";
        while(productDetails.firstChild)
        {
            productDetails.removeChild(productDetails.firstChild);
        }

        this.loadedProduct.details.forEach(element => {
            let newItem =  document.createElement('li');
            newItem.innerHTML = element;
            productDetails.appendChild(newItem);
        });

        imgUploadBtn.style.display = "flow-root";
    }

    LoadItem(itemCode){
        //get number from itemCode
        let reggex = /\d+/g;
        itemCode = parseInt(itemCode.match(reggex)[0]);
        this.ShowDetails(itemCode);
        this.LoadPicture();
    }

    LoadPicture(){
        if(this.loadedProduct.picture != ""){
            loadedDiv.style.display = "block";
            let img = new Image();
                img.onload = function(){
                    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                    this.LoadImgOnCanvas(img);
                    this.InitDrawing();
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
                this.LoadImgOnCanvas();
                this.InitDrawing();
                this.SaveImage();
                this.LoadPicture();
            }
          };
        })(newFile);
        reader.readAsDataURL(newFile);
    }

    InitDrawing(){
        canvas.addEventListener("mousemove", function(e){this.MouseMove(e)}, false);
        canvas.addEventListener("mousedown", function(e){this.MouseDown(e)}, false);
        canvas.addEventListener("mouseup", this.MouseUp, false);
        this.currX = 0;
        this.currY = 0;
        this.prevX = 0;
        this.prevY = 0;
    }

    MouseMove(e){
        if(this.drawActive){
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = e.clientX - canvas.getBoundingClientRect().left;
            this.currY = e.clientY - canvas.getBoundingClientRect().top;
            this.Draw();
        }
    }

    Draw(){
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(this.currX, this.currY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
        this.SaveImage();
    }

    MouseDown(e){
        this.prevX = this.currX;
        this.prevY = this.currY;
        this.currX = e.clientX - canvas.getBoundingClientRect().left;
        this.currY = e.clientY - canvas.getBoundingClientRect().top;
        this.drawActive = true;
    }

    MouseUp(){
        this.drawActive = false;
    }

    SaveImage(){
        this.loadedProduct.picture = canvas.toDataURL("image/png");
        this.regio.items[this.productCode] = this.loadedProduct;
        Regios.updateRegio(this.regio);
    }

    EmptySelected(){
        productName.innerHTML = "";
        productPrice.innerHTML = "";
        while(productDetails.firstChild)
        {
            productDetails.removeChild(productDetails.firstChild);
        }
        loadedDiv.style.display = "none";
        imgUploadBtn.style.display = "none";
    }
}
