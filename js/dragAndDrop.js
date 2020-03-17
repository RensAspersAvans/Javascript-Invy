const dropzones = document.querySelector('.dropzones');

document.getElementById("grid").addEventListener("click", function(e) {
    // e.target is the clicked element!
    // If it was a list item
    for (let index in e.target.classList)
    {
        if (/[a-z]\d/.test(e.target.classList[index]))
        {
          //show info in side bar
          //   WareHouse.showInfoSelectedItem(e.target.classList[index]);
            loadItem(e.target.classList[index])
            return;
        }
    }
});

let el = null;
let currentItem;
let currentClassList;
let currentProduct;

document.querySelector('.draggable-items').addEventListener('dragstart', e => {
    // console.log(e)
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
    if (currentItem == null)
    {
        currentItem = e.target;
        currentClassList = currentItem.classList;

        //removes draggable from product-item
        for(let index in currentClassList)
        {
            if(/[a-z]\d/.test(currentClassList[index]))
            {
                currentProduct = currentClassList[index];
                let productItem = document.getElementsByClassName(currentClassList[index])[0]
                productItem.removeAttribute('draggable');
                productItem.style.backgroundColor = "orange";
                break;
            }
        }
    }
        let position = e.target.id;
        let row = position.split("-")[0];
        let col = position.split("-")[1];
        let selectedRegio = document.getElementById("regioSelect");
        let regio = Regios.getRegio(selectedRegio.options[selectedRegio.selectedIndex].text.toLowerCase());

        if (Number.isInteger(parseInt(row)))
        {
            let temp = regio.map[row][col];
            if (regio.map[row][col] == currentProduct)
            {
                e.target.style.backgroundColor = "lightgrey";
                regio.map[row][col] = "null";
                Regios.updateRegio(regio);
                e.target.classList.add('dropzone');
                e.target.classList.remove(currentProduct);
                document.getElementById(e.target.id).removeAttribute('draggable');
            }
        }

        if (e.target.classList.contains('dropzone')) {
            e.target.style.backgroundColor = "black";
        }
        // currentItem = null;
});

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
        regio.map[row][col] = currentProduct;
        Regios.updateRegio(regio);
        document.getElementById(position).classList.add(currentProduct);
    } else
    {
        let productItem = document.getElementsByClassName(currentProduct)[0]
        productItem.setAttribute('draggable',true);
        productItem.style.backgroundColor = "green";
        WareHouse.resetSelected();
    }
    currentItem = null;
});

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


