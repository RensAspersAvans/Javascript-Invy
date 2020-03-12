let openFormButton = document.getElementById("open-create-popup");
let closeFormButton = document.getElementById("close-create-popup");
let saveFormButton = document.getElementById("saveForm");
let form = document.getElementById("form-popup");
let creationForm = document.getElementById("creationForm");
let detailArea = document.getElementById("detailArea");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let details = [];
let detailIndex = 0;

openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
saveFormButton.addEventListener("click", saveForm);
previousButton.addEventListener("click", previousDetail);
nextButton.addEventListener("click", nextOrNewDetail);

function nextOrNewDetail(){
    if(detailIndex >= details.length){
        details[detailIndex] = detailArea.value;
        detailIndex++;
        details[detailIndex] = "";
        detailArea.value = detailArea[detailIndex];
    }
    else{
        details[detailIndex] = detailArea.value;
        detailIndex++;
        detailArea.value = detials[detailIndex];
    }
    if(details.length >= detailIndex){
        nextButton.innerText = "+";
    }
    else{
        nextButton.innerText = ">";
    }
}

function previousDetail(){
    if(detailIndex == 0){
        return;
    }
    else{
        details[detailIndex] = detailArea.value;
        detailIndex--;
        detailArea.value = details[detailIndex];
    }
}

function saveForm(event){
    if(creationForm.checkValidity()){
        let json = toJSON( this )
        //todo: SAVING
        console.log(json);
        details = [];
        detailIndex = 0;
        closeForm();
    }
    
}

function toJSON(){
    let obj = {};
    let elements = form.querySelectorAll("input, select");
    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];
        let name = element.name;
        let value = element.value;

        obj [ name ] = value;
        
    }
    return JSON.stringify( obj );
}

function openForm(){
    form.style.display="block";
    openFormButton.style.display="none";
    details = [];
    detailIndex = 0;

}

function closeForm(){
    form.style.display="none";
    openFormButton.style.display="block";    
    creationForm.reset();
    details = [];
    detailIndex = 0;
}
