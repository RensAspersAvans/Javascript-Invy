let openFormButton = document.getElementById("open-create-popup");
let closeFormButton = document.getElementById("close-create-popup");
let saveFormButton = document.getElementById("saveForm");
let form = document.getElementById("form-popup");
let creationForm = document.getElementById("creationForm");

openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
saveFormButton.addEventListener("click", saveForm);

function saveForm(event){
    if(creationForm.checkValidity()){
        let json = toJSON( this )
        //todo: SAVING
        console.log(json);
        closeForm();
    }
    
}

function toJSON(){
    let obj = {};
    let elements = form.querySelectorAll("input, select, textarea");
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

}

function closeForm(){
    form.style.display="none";
    openFormButton.style.display="block";    
    creationForm.reset();
}