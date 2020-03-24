import {Regios} from "../model/Regios";


export class Movable
{
    constructor(el, currentItem, currentClasslist, currentProduct, itemDetailShower)
    {
        this.el = el;
        this.currentItem = currentItem;
        this.currentClasslist = currentClasslist;
        this.currentProduct = currentProduct;
        this.ItemDetails = itemDetailShower;
    }

    ClickItem(e)
    {
        for (let index in e.target.classList)
        {
            if (/[a-z]\d/.test(e.target.classList[index]))
            {
                this.ItemDetails.LoadItem(e.target.classList[index]);
                return;
            }
        }
    }

    DragStart(e)
    {
        e.dataTransfer.dropEffect = 'move';
        this.el = e.target.cloneNode(true)
        this.el.removeAttribute('draggable');
    }

    DragOver(e)
    {
        if (e.target.classList.contains('dropzone'))
        {

        }
        e.preventDefault();
    }

    DragEnter(e)
    {
        if (this.currentItem == null)
        {
            this.currentItem = e.target;
            this.currentClassList = this.currentItem.classList;

            //removes draggable from product-item
            for(let index in this.currentClassList)
            {
                if(/[a-z]\d/.test(this.currentClassList[index]))
                {
                    this.currentProduct = this.currentClassList[index];
                    let productItem = document.getElementsByClassName(this.currentClassList[index])[0]
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
            if (regio.map[row][col] == this.currentProduct)
            {
                e.target.style.backgroundColor = "lightgrey";
                regio.map[row][col] = "null";
                Regios.updateRegio(regio);
                e.target.classList.add('dropzone');
                e.target.classList.remove(this.currentProduct);
                document.getElementById(e.target.id).removeAttribute('draggable');
            }
        }

        if (e.target.classList.contains('dropzone')) {
            e.target.style.backgroundColor = "black";
        }
    }

    DragDrop(e)
    {
        //TODO: check if e.target is undefined before placing.
        
        if (e.target.classList.contains('dropzone'))
        {
            e.preventDefault();
            e.target.style.backgroundColor = "yellow";
            e.target.setAttribute('draggable', true);
            e.target.classList.remove('dropzone');
            this.el = null;

            let position = e.target.id;
            let row = position.split("-")[0];
            let col = position.split("-")[1];
            let selectedRegio = document.getElementById("regioSelect");

            let regio = Regios.getRegio(selectedRegio.options[selectedRegio.selectedIndex].text.toLowerCase());
            regio.map[row][col] = this.currentProduct;
            Regios.updateRegio(regio);
            document.getElementById(position).classList.add(this.currentProduct);
        } else
        {
            let productItem = document.getElementsByClassName(this.currentProduct)[0]
            productItem.setAttribute('draggable',true);
            productItem.style.backgroundColor = "green";
        }
        this.currentItem = null;
    }

    DragLeave(e)
    {
        if (e.target.classList.contains('dropzone')) {
            e.target.style.backgroundColor = "lightgrey";
        }
    }
}