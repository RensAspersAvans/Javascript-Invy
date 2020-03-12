const dropzones = document.querySelector('.dropzones');

let el = null;

document.querySelector('.draggable-items').addEventListener('dragstart', e => {
    console.log(e)
    e.dataTransfer.dropEffect = 'move';
    el = e.target.cloneNode(true)
    el.removeAttribute('draggable');
});

dropzones.addEventListener('dragover', (e) => {
    if (e.target.classList.contains('dropzone'))
    {

    }
        e.preventDefault();
});


dropzones.addEventListener('dragenter', (e) => {
    document.getElementById("li1").setAttribute('draggable',false);
        let position = e.target.id;
        let row = position.split("-")[0];
        let col = position.split("-")[1];
        let selectedRegio = document.getElementById("regioSelect");
        let regio = Regios.getRegio(selectedRegio.options[selectedRegio.selectedIndex].text.toLowerCase());

    if (Number.isInteger(parseInt(row)))
    {
        if (regio.map[row][col] == "p")
        {
            e.target.style.backgroundColor = "lightgrey";
            regio.map[row][col] = "null";
            Regios.updateRegio(regio);
            e.target.classList.add('dropzone');
        }
    }

    if (e.target.classList.contains('dropzone')) {
        e.target.style.backgroundColor = "black";
    }
})
dropzones.addEventListener('drop', (e) => {
    if (e.target.classList.contains('dropzone'))
    {
        e.preventDefault();
        e.target.style.backgroundColor = "yellow";

        e.target.setAttribute('draggable', true);
        e.target.classList.remove('dropzone');
        el = null;

        let position = e.target.id;
        let row = position.split("-")[0];
        let col = position.split("-")[1];
        let selectedRegio = document.getElementById("regioSelect");

        let regio = Regios.getRegio(selectedRegio.options[selectedRegio.selectedIndex].text.toLowerCase());
        regio.map[row][col] = "p";
        Regios.updateRegio(regio);
    } else
    {
        document.getElementById("li1").setAttribute('draggable',true);
    }
})

dropzones.addEventListener('dragleave', (e) => {
    if (e.target.classList.contains('dropzone')) {
        e.target.style.backgroundColor = "lightgrey";
    }
})

const events = [
    'dragenter',
    'dragleave',
    'dragover', // to allow drop
    'drop'
];


