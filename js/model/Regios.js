export class Regios
{
    constructor(kleding, tierlatijn, decocratie) {
        this.kleding = kleding;
        this.tierlatijn = tierlatijn;
        this.decocratie = decoratie;
        //make for each element in constructor a getter and setter.
    }

    static getRegios() {
        let regios;
        if (localStorage.getItem("regios") === null) {
            regios = [];
        } else {
            regios = JSON.parse(localStorage.getItem("regios"));
        }
        return regios;
    }

    static addRegio(regio) {
        const storedRegios = this.getRegios();
        for (let i in storedRegios)
        {
            if (storedRegios[i].name == regio.name)
            {

                storedRegios.splice(i, 1);
            }
        }
        storedRegios.push(regio);
        localStorage.setItem("regios", JSON.stringify(storedRegios));
    }

    static getRegio(regioname) {
        let regio;
        if (JSON.parse(localStorage.getItem("regios")) === null) {
            regio = [];
        } else {
            let regios = JSON.parse(localStorage.getItem('regios'));
            for (var index = 0; index < 3; index++)
            {
                if (regios[index].name.includes(regioname))
                {
                    regio = regios[index];
                }
            }
        }
        return regio;
    }

    static updateRegio(update) {
        const storedRegios = this.getRegios();

        for (let i in storedRegios)
        {
            if (storedRegios[i].name == update.name)
            {
                storedRegios[i] = update;
            }
        }
        localStorage.setItem("regios", JSON.stringify(storedRegios));
    }

}