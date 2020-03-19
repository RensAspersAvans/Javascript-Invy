const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productDetails = document.getElementById("product-details-list");
const canvas = document.getElementById("product-img");
const imgUploadBtn = document.getElementById("no-img");
const imgDiv = document.getElementById("product-img-div");
const loadedDiv = document.getElementById("loaded-img-div");
const ctx = canvas.getContext("2d");
let prevX = 0;
let currX = 0;
let prevY = 0;
let currY = 0;
let drawActive = false;
let productCode;
let selectedRegio = document.getElementById("regioSelect");
let regio;

let loadedProduct;

let dummy1 = {"name":"Ice cream", "price":"14", "details":["cold", "sweet", "strawberries"], "picture":"" };

let dummy2 = {"name":"Boomer-juice", "price":"69", "details":["old", "stinks", "costs a lot of money"], "picture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC" };

function showDetails(itemCode){
    regio = Regios.getRegio(selectedRegio.options[selectedRegio.selectedIndex].text.toLowerCase());
    productCode = itemCode;
    loadedProduct = regio.items[itemCode];
    productName.innerHTML = loadedProduct.name;
    productPrice.innerHTML = "Prijs: €" + loadedProduct.price + ".-";
    while(productDetails.firstChild)
    {
        productDetails.removeChild(productDetails.firstChild);
    }

    loadedProduct.details.forEach(element => {
        let newItem =  document.createElement('li');
        newItem.innerHTML = element;
        productDetails.appendChild(newItem);
    });

    imgUploadBtn.style.display = "flow-root";
}

function loadItem(itemCode){
    //get number from itemCode
    let reggex = /\d+/g;
    itemCode = parseInt(itemCode.match(reggex)[0]);
    showDetails(itemCode);
    loadPicture();
}

function loadPicture(){
    if(loadedProduct.picture != ""){
        loadedDiv.style.display = "block";
        let img = new Image();
            img.onload = function(){
                canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                let sizer = Math.min((500/img.width),(500/img.height));
                canvas.width = 500;
                canvas.height = 500;
                canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width*sizer, img.height*sizer);
                initDrawing();
        } 
        img.src = loadedProduct.picture;
    }else{
        loadedDiv.style.display = "none";
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
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        let buffer = new Image();
        buffer.src = e.target.result;
        buffer.onload = function(){ 
            let sizer = Math.min((500/buffer.width),(500/buffer.height));         
            canvas.width = 500;
            canvas.height = 500;
            
            canvas.getContext("2d").drawImage(buffer, 0, 0, buffer.width, buffer.height, 0, 0, buffer.width*sizer,  buffer.height*sizer);
            initDrawing();
            saveImage();
            loadPicture();
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
    ctx.lineWidth = 3;
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
    loadedProduct.picture = canvas.toDataURL("image/png");
    regio.items[productCode] = loadedProduct;
    Regios.updateRegio(regio);
}

function init(){
    if(loadedProduct == null){
        imgUploadBtn.style.display = "none";
    }
}

function emptySelected(){
    productName.innerHTML = "";
    productPrice.innerHTML = "";
    while(productDetails.firstChild)
    {
        productDetails.removeChild(productDetails.firstChild);
    }
    loadedDiv.style.display = "none";
    imgUploadBtn.style.display = "none";
}

document.getElementById("open-canvas").addEventListener('click', function(e){imgDiv.style.display = "flex"; document.getElementById("image-popup").style.display = "block"}, false);
document.getElementById("close-canvas").addEventListener('click', function(e){imgDiv.style.display = "none"; document.getElementById("image-popup").style.display = "none"}, false);
document.getElementById('getPicture').addEventListener('change', handleFileSelect, false);
init();