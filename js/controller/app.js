import { switchInterface} from "./Initialize";
import { Movable } from "../view/Movable";
import { ItemDetails} from "../view/ItemDetails";
import { ProductCreationPopup } from "../view/ProductCreationPopup";
import {WeatherAPI} from "../weatherAPI";

//region SelectRegio
document.getElementById('chooseRegio').addEventListener('click', switchInterface);
//endregion

//region ItemDetails
const ItemDetailsShower = new ItemDetails();
window.GlobalItemDetailShower = ItemDetailsShower;
const imgDiv = document.getElementById("product-img-div");
document.getElementById("open-canvas").addEventListener('click', function(e){
    imgDiv.style.display = "flex";
    document.getElementById("image-popup").style.display = "block"}, false);
document.getElementById("close-canvas").addEventListener('click', function(e){
    imgDiv.style.display = "none";
    document.getElementById("image-popup").style.display = "none"}, false);
document.getElementById('getPicture').addEventListener('change', function(e){
    ItemDetailsShower.HandleFileSelect(e);
}, false);
document.getElementById("close-show-popup").addEventListener('click', function(e){
    ItemDetailsShower.CloseDetails();
});
document.getElementById("moredetails").addEventListener('click', function(e){
    ItemDetailsShower.ShowNextDetails();
});
document.getElementById("details-previous").addEventListener("click", ItemDetailsShower.PreviousDetail);
document.getElementById("details-next").addEventListener("click", ItemDetailsShower.NextOrNewDetail);
document.getElementById("save-details").addEventListener("click", ItemDetailsShower.SaveForm);
document.getElementById("details-sellprice").addEventListener("input", function(e){ItemDetailsShower.UpdateBTW(e)});
//endregion

//region Drag and Drop
const dragAndDrop = new Movable(null, null, null, null, ItemDetailsShower);
const dropzones = document.querySelector('.dropzones');

document.getElementById("grid").addEventListener("click", function(e) {
    dragAndDrop.ClickItem(e);
});

document.querySelector('.draggable-items').addEventListener('dragstart', e => {
    dragAndDrop.DragStart(e);
});

dropzones.addEventListener('dragover', (e) => {
    dragAndDrop.DragOver(e);
});

dropzones.addEventListener('dragenter', (e) => {
   dragAndDrop.DragEnter(e);
});

dropzones.addEventListener('drop', (e) => {
    dragAndDrop.DragDrop(e);
});

dropzones.addEventListener('dragleave', (e) => {
    dragAndDrop.DragLeave(e);
});
//endregion

//region productcreation
const productCreationPopup = new ProductCreationPopup();
document.getElementById("open-create-popup").addEventListener("click", productCreationPopup.OpenForm);
document.getElementById("close-create-popup1").addEventListener("click", productCreationPopup.CloseForm);
document.getElementById("close-create-popup2").addEventListener("click", productCreationPopup.CloseForm);
document.getElementById("sellprice").addEventListener("input", function(e){productCreationPopup.UpdateBTW(e)});
document.getElementById("saveForm").addEventListener("click", productCreationPopup.SaveFormStep2);
document.getElementById("previous").addEventListener("click", productCreationPopup.PreviousDetail);
document.getElementById("next").addEventListener("click", productCreationPopup.NextOrNewDetail);
document.getElementById("nextstep").addEventListener("click", productCreationPopup.ShowNextStep);

//endregion

//region WeatherAPI
const Weather = new WeatherAPI();
document.getElementById("search-button").addEventListener("click", Weather.FindWeatherDetails);
document.getElementById("weather-search").addEventListener("keyup", function(e){Weather.CheckEnterPressed(e)});

//endregion