


abstract class Reddito {                         //definisco abstract class Reddito con le 4 proprietà


    // Proprietà
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    //utilizzo constructor per impostare le varibili 
    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    // Definisco i Metodi 
    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;
}


class Lavoratore extends Reddito {

    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef)
    }

    getUtileTasse(): number {
        let utileTasse = this.redditoannuolordo * this.codredd / 100;
        return utileTasse;
    }

    getTasseInps(): number {
        let tasseInps = this.getUtileTasse() * this.tasseinps / 100;
        return tasseInps;
    }

    getTasseIrpef(): number {
        let tasseIrpef = this.getUtileTasse() * this.tasseirpef / 100;
        return tasseIrpef;
    }

    getRedditoAnnuoNetto(): number {
        let redditoNetto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())
        return redditoNetto;
    }

}

var Commerciante: any = new Lavoratore(78, 40000, 25, 5);
var Artigiano = new Lavoratore(67, 30000, 30, 3);
var Ristoratore = new Lavoratore(40, 60000, 22, 4);

console.log(`Commerciante: Utile tasse di ${Commerciante.getUtileTasse()} € - Tasse inps di ${Commerciante.getTasseInps()} € - Tasse irpef di ${Commerciante.getTasseIrpef()} € - Reddito netto uguale a ${Commerciante.getRedditoAnnuoNetto()} €`);

console.log(`Artigiano: Utile tasse di ${Artigiano.getUtileTasse()} € - Tasse inps di ${Artigiano.getTasseInps()} € - Tasse irpef di ${Artigiano.getTasseIrpef()} € - Reddito netto uguale a ${Artigiano.getRedditoAnnuoNetto()} €`);

console.log(`Ristoratore: Utile tasse di ${Ristoratore.getUtileTasse()} € - Tasse inps di ${Ristoratore.getTasseInps()} € - Tasse irpef di ${Ristoratore.getTasseIrpef()} € - Reddito netto uguale a ${Ristoratore.getRedditoAnnuoNetto()} €`);