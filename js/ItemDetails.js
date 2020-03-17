const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productDetails = document.getElementById("product-details-list");
const canvas = document.getElementById("product-img");

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

        //blobToDataURL(blob, function(dataurl){
        //    img.src = dataurl;
        //});
    }
}

function handleFileSelect(evt) {
    let newFile = evt.target.files[0];
    if (!newFile.type.match('image.*')) {
        window.alert("gekozen bestand is niet van het juiste type!")
        return;
    }

    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        let buffer = new Image();
        buffer.src = e.target.result;
        buffer.onload = function(){
            canvas.width = buffer.width;
	        canvas.height = buffer.height;
            canvas.getContext("2d").drawImage(buffer, 0, 0);
            loadedProduct["picture"] = canvas.toDataURL("image/png");
            loadPicture(loadedProduct);
        }
        
      };
    })(newFile);
    reader.readAsDataURL(newFile);
}

function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});


}

function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}

document.getElementById('getPicture').addEventListener('change', handleFileSelect, false);
showDetails(dummy1);