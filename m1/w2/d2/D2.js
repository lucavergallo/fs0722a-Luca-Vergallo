/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
I datatype sono i tipi di dato o valore che posso assegnare a una variabile nel linguaggio Javascript.
Possiamo avere:
Datatype stringa --> Questo tipo di dato è una sequenza di uno o più caratteri (lettere, numeri, simboli). Le stringhe sono utili in quanto rappresentano dati testuali e viene definito tra virgolette singole ' o doppie ".
Datatype Numero --> Questo tipo di dato è numerico e se espresso in decimali, richiede l'utilizzo del punto al posto della virgola.
Datatype Booleano --> E' il tipo di dato booleano che può assumere solo i valori true (vero) o false (falso).
Datatype Null --> Questo datatype lo rilevo nelle variabili che ho dichiarato ma a cui non voglio intenzionalmente assegnare un valore.
Datatype Undefined --> Questo datatype lo rilevo quando la variabile non è stata definita o non è stata valorizzata.
DatatypeArray --> è racchiuso tra parentesi quadre e contiente una lista di valori (numeri, lettere, o altri array)
Datatype Object --> è racchiuso tra parentesi graffe e contiene un lista di coppie "chiave:valore"
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Luca';
console.log(name);
document.write(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var a = 12;
var b = 20;
var c = a + b;

console.log(c);
document.write(c);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x;
x = 12;
console.log(x);
document.write(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = 'Vergallo';
console.log(name);
document.write(name);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var d = 4;
var e = d - x;
console.log(d - x);
document.write(d - x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";
console.log(name1 == name2);
document.write(name1 == name2);

console.log(name1 != name2);
document.write(name1 != name2);

const NAME = 'Prova';
NAME = 'Nuova Prova';




