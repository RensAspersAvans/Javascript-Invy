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
    if(detailIndex >= details.length - 1){
        details[detailIndex] = detailArea.value;
        detailIndex++;
        detailArea.value = null;
    }
    else{
        details[detailIndex] = detailArea.value;
        detailIndex++;
        detailArea.value = details[detailIndex];
    }
    if(details.length >= detailIndex){
        nextButton.textContent = "+";
    }
    else{
        nextButton.textContent = ">";
    }
}

function previousDetail(){
    if(detailIndex == 0){
        return;
    }
    else{
        if(detailArea.value != ""){
            details[detailIndex] = detailArea.value;
        }     
        detailIndex--;
        detailArea.value = details[detailIndex];
        nextButton.textContent=">";
    }
}

function saveForm(event){
    
    if(document.getElementById("newName").value == ""){
        window.alert("Vul een productnaam in!");
        return;
    }
    else if(document.getElementById("newPrice").value == ""){
        window.alert("Vul een prijs in!");
        return;
    }
    else if(document.getElementById("newPrice").value <= 0){
        window.alert("Prijs moet hoger zijn dan 0!");
        return;
    }
    else{
        details[detailIndex] = detailArea.value;
        let jsonstr = toJSON( this );
        let selectedRegio = document.getElementById("regioSelect");
        let regio = Regios.getRegio(selectedRegio[selectedRegio.selectedIndex].innerText.toLowerCase());

        regio.items.push(JSON.parse(jsonstr));
        Regios.updateRegio(regio);
        WareHouse.showItems();
        closeForm();
    }
    
}

function toJSON(){
    let obj = {};
    let detailsArray = details.filter(element => {
            return element != "";
    });
    let elements = form.querySelectorAll("input");
    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];
        let name = element.name;
        let value = element.value;
        obj [ name ] = value;
        element.value=null;
    }
    obj["details"] = detailsArray;
    obj["picture"] = "";
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
    details = [];
    detailIndex = 0;
    detailArea.value= null;
}
