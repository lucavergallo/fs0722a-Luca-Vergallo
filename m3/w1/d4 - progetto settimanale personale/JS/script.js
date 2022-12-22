/*Implemento Capo con classe Saldi inserendo i metodi per calcolare il saldo e ottenere il nuovo prezzo scontato */
var Saldi = /** @class */ (function () {
    function Saldi(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Saldi.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Saldi.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Saldi;
}());


let array = [];


window.addEventListener('DOMContentLoaded', caricaCapi);

function caricaCapi() {
    
fetch('/JSON/Abbigliamento.json')
.then(data => {
return data.json();
})
.then(function (capi) {
    array = capi;
    console.log(capi);
    capi.map(function (element) {
        let abbigliamento = new Saldi(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        
        console.log(abbigliamento);
        console.log(`Id prodotto: ${element.id}`);
        console.log(`Prezzo iva esclusa ${element.prezzoivaesclusa}€`);
        console.log(`Prezzo iva inclusa ${element.prezzoivainclusa}€`);
        console.log(`Sconto applicato ${element.saldo}%`);
        console.log(`Prezzo scontato ${abbigliamento.getacquistocapo()}€`);
        console.log(`Codice prodotto: ${element.codprod}`);
        console.log(`Modello: ${element.modello}`);
        console.log(`Collezione: ${element.collezione}`);
        console.log(`Quantità: ${element.quantita} pezzi`);
        console.log(`Colore disponibile: ${element.colore}`);
        console.log(`Si trova in: ${element.disponibile}`);
        
        let cards = document.querySelector('#cards');
        cards.innerHTML += `<div class="card text-bg-warning mb-3 me-5" style="max-width: 18rem;" id="card">
        <div class="card-header text-center" id="capo">${element.capo}</div>
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 class="card-title text-center" id="prezzo_scontato">${abbigliamento.getacquistocapo()}€</h5>
          <p class="card-text" id="prezzo_originale">Prezzo originale ${element.prezzoivainclusa}€</p>
          <p class="card-text" id="sconto">Sconta applicato: ${element.saldo}%</p>
          <p class="card-text">Codice prodotto: ${element.codprod}</p>
          <p class="card-text">Collezione: ${element.collezione}</p>
          <p class="card-text">Quantità: ${element.quantita} pezzi</p>
          <p class="card-text">Colore disponibile: ${element.colore}</p>
          <p class="card-text">Si trova in: ${element.disponibile}</p>
          <button type="button" class="btn btn-light">Acquista</button>
        </div>
        </div>`;
    
        
    });
});
}
