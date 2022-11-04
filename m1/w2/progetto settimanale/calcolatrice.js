/*

Nel file HTML ho aggiunto ai tag <button> l'attributo onclick inserendo al suo interno la funzione cicfraCliccata con la parola chiave contestuale "this" che si utilizza per evidenziare l'elemento che si è attivato quando si scatena l'evento(il click).

Poi qui nel file javascript ho inserito la funzione in basso  "aggiungiCifra" e chiedo alla funzione aggiungiCifra (con parametro elemento) di creare una variabile cifraCliccata prendendo dall'"elemento" che è stato cliccato l'attributo "data-simbolo" (attributo personalizzato che ho creato per assegnare il valore esatto ad ogni tasto)
 */

function aggiungiCifra(elemento) {

    let cifraCliccata = elemento.getAttribute('data-simbolo');

    document.getElementById('display').value += cifraCliccata;
/*
con document.getElementById('numeri').value += cifraCliccata prelevo il "valore" della cifra cliccata e in questo modo con "+=" posso concatenare la cifra cliccata con le successive.
 */
}

/*
Con la funzione tot chiedo alla funzione di creare una variabile let numeri prendendo il valori presenti nell'elemento input (dispaly) della calcolatrice.
Poi dico alla funzone di trasformare il value di "numeri" (cambiare la proprietà value di numeri) con una funzione eval. In questo modo trasformiamo il value di numeri da stringa a javascript per poter svolgere operazioni matematiche.
 */




function tot() {

    let display = document.getElementById('display');
    
    display.value = eval(display.value);
}

/*
La funzione "del" richiama la variabile "str" prendendo il valore contenuto nell'elemento id "display". Poi assegno alla variabile il valore "" /* e con document.getElementById('display').value = str prelevo il "valore" della cifra presente nel display e azzero il contenuto cliccando su "AC".
 */

function del(){

    let str=document.getElementById('display').value;

    str=""
    
    document.getElementById('display').value=str

}

        
