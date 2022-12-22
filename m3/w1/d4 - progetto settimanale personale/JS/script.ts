/*Crea interface per definire le proprietà e le tipologia di dato che arriveranno come risultato dopo risposta al then della fetch nel file JS*/
interface Capo{
    id: number,
    codprod:number,
    collezione:string,
    capo:string,
    modello:number,
    quantita:number,
    colore:string,
    prezzoivaesclusa:number,
    prezzoivainclusa:number,
    disponibile:string,
    saldo:number
}

/*Implemento Capo con classe Saldi inserendo i metodi per calcolare il saldo e ottenere il nuovo prezzo scontato */

class Saldi implements Capo {
    id: number;
    codprod: number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor(_id: number, _codprod: number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string, _prezzoivaesclusa:number, _prezzoivainclusa:number, _disponibile:string,_saldo:number){
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa= _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getsaldocapo():number{
        return this.prezzoivainclusa * this.saldo / 100;
    }

    getacquistocapo():number{
        return this.prezzoivainclusa - this.getsaldocapo();
    }


}



