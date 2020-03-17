const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productDetails = document.getElementById("product-details-list");
const canvas = document.getElementById("product-img");
const imgUploadBtn = document.getElementById("no-img");
const imgDiv = document.getElementById("product-img-div");
const ctx = canvas.getContext("2d");
let prevX = 0;
let currX = 0;
let prevY = 0;
let currY = 0;
let drawActive = false;

let loadedProduct;

let dummy1 = {"name":"Ice cream", "price":"14", "details":["cold", "sweet", "strawberries"], "picture":"" };

let dummy2 = {"name":"Boomer-juice", "price":"69", "details":["old", "stinks", "costs a lot of money"], "picture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC" };

function showDetails(item){
    productName.innerHTML = item["name"];
    productPrice.innerHTML = "price: " +  item["price"];
    while(productDetails.firstChild) productDetails.removeChild(productDetails.firstChild);
    item["details"].forEach(element => {
       let newItem =  document.createElement('li');
       newItem.innerHTML = element;
       productDetails.appendChild(newItem);
    });
    loadedProduct = item;
}

function loadItem(item){
    showDetails(item);
    loadPicture(item);
}

function loadPicture(item){
    let dataURL = item["picture"]
    if(!dataURL == ""){
        let img = new Image();
        img.onload = function(){
            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
            canvas.getContext("2d").drawImage(img, 0, 0);
        } 
        img.src = dataURL;
        imgUploadBtn.style.display = "none";
    }
}

function handleFileSelect(evt) {
    let newFile = evt.target.files[0];
    if (!newFile.type.match('image.*')) {
        window.alert("gekozen bestand is niet van het juiste type!")
        return;
    }

    var reader = new FileReader();
    reader.onload = (function() {
      return function(e) {
        let buffer = new Image();
        buffer.src = e.target.result;
        buffer.onload = function(){
            canvas.width = buffer.width;
	        canvas.height = buffer.height;
            canvas.getContext("2d").drawImage(buffer, 0, 0);
            saveImage();
            loadPicture(loadedProduct);
        }
      };
    })(newFile);
    reader.readAsDataURL(newFile);
}

function initDrawing(){
    canvas.addEventListener("mousemove", function(e){mouseMove(e)}, false);
    canvas.addEventListener("mousedown", function(e){mouseDown(e)}, false);
    canvas.addEventListener("mouseup", mouseUp, false);
    currX = 0;
    currY = 0;
    prevX = 0;
    prevY = 0;
}

function mouseMove(e){
    if(drawActive){
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.getBoundingClientRect().left;
        currY = e.clientY - canvas.getBoundingClientRect().top;
        draw();
    }
}

function draw(){
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    saveImage();
}

function mouseDown(e){
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.getBoundingClientRect().left;
    currY = e.clientY - canvas.getBoundingClientRect().top;
    drawActive = true;
}

function mouseUp(){
    drawActive = false;
}

function saveImage(){
    loadedProduct["picture"] = canvas.toDataURL("image/png");
}

function init(){
    if(loadedProduct == null){
        imgUploadBtn.style.display = "none";
    }
}

document.getElementById('getPicture').addEventListener('change', handleFileSelect, false);
init();
initDrawing();