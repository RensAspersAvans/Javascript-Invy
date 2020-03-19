import { switchInterface} from "./Initialize";
import { Movable } from "../view/Movable";

//region SelectRegio
document.getElementById('chooseRegio').addEventListener('click', switchInterface);
//endregion

//region Drag and Drop
const dragAndDrop = new Movable(null, null, null, null);
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






