/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(sum)



/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)  //utilizzo la funzione Math.floor( Math.random() per generare numeri interi casuali 
console.log(random)


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {            //creo un oggetto definito da coppie chiave/valore ovvero proprietà:valore

  name: "Luca",
  surname: "Vergallo",
  age: 31

};

console.log(me)



/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/


delete me.age;  // in alternativa è possibile utilizzare delete me["age"];

console.log(me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills =  ["Javascript","Java","PHP"];

console.log(me.skills)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Fourth item')

console.log(me.skills)


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

const removeLast = me.skills.pop();  //creo la costante e richiamo la proprietà skills che contiente l'array e con il metodo "pop" elimino ultimo elemento dell'array
console.log(removeLast);

console.log( me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.round(Math.random() * 5+1);  //Math.round() restituisce il valore di un numero approssimato all’intero ad esso più vicino e Math.random() mi genera un numero casuale compreso tra 1 e 6
}

dice ();
console.log(dice());


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(n, m) {
  return Math.max(n, m); //dati i parametri n e m utilizzo la funzione Math.max() per ottener il numero maggiore tra due numeri
}

whoIsBigger();
console.log(whoIsBigger(6,8));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) { 

  return str.split(" "); //dato il parametro str sfrutto il metodo "split" per dividere la stringa di input in singole parole creando così un array

}

console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, bool) {   //definisco la funzione impostando un costrutto if dicendo che se il valore booleano (definito con valore bool) è true allora la funzione deve ritornare la stringa senza il primo carattere sfruttando il metodo slice con posizion 1 nel primo parametro per eliminare il primo carattere, altrimenti la deve ritornare senza l'ultimo carattere.
  if (bool == true) {
    return str.slice(1, str.length);
  } else {
    return str.slice(0, str.length - 1);
  }
}

console.log(deleteOne("Love", true))


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {       
    let array = str.split(" ");    //trasforma la stringa in un array splittando/suddividendo gli spazi
  array1 = array.filter((e) => {   //ottiene un array con filtro sulle lettere
    return verificanumero(e) == false;  //ritrasforma array1 in stringa
  });
  let str1 = "";
  for (let e of array1) {
    str1 += e +" ";
  }
  return str1.slice(0, str1.length-1); //togliamo l'ultimo spazio con slice
}

function verificanumero(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); //Usiamo !isNaN in combinazione con parseFloat() per controllare se "n" è un numero. Uso isFinite() per controllare se il numero è finito/compiuto
}


console.log(onlyLetters("I have 4 dogs"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) { 
  let input = document.createElement("input");
  input.setAttribute("type", "email"); //imposto gli attributi type email al nuovo elemento input creato 
  input.value = str;
  return input.checkValidity(); // con il metodo checkValidity() verifico la validità di tutti i controlli contenuti in esso su cui sono impostati dei vincoli di validazione, restituendo true se sono tutti validi, false se almeno un controllo non è valido
}

console.log(isThisAnEmail("email@email.it")) 


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() { 
  let date = new Date();
  return date.toDateString().split(" ")[0];
  
}
//trasformo l'oggetto date in una stringa con toDateString()
//suddivido la stringa in un array e con [0] prendo il primo elemento, ovvero il giorno della settimana corrente

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(n) { 
  let oggetto = {
    sum: 0,
    values: []
  };

  //con un ciclo for definisco variabile let pari alla funzione dice che mi generava un numero casuale poi definisco la proprietà sum dell'oggetto assegnando il valore della funzione dice con l'operatore +=. Definisco valore alla proprietà values inserendo nell'array i valori provenienti dalle assegnazioni randomiche di invocare (funzione dice).

  for (let i = 0; i < n; i++) {  
    let invocare = dice();
    oggetto.sum += invocare;
    oggetto.values[oggetto.values.length] = invocare;
  }
  return oggetto;
}

console.log(rollTheDices(3))


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

let date_1 = new Date('10/25/2022'); //con new date assegno un valore (oggetto data) alla variabile date_1

const howManyDays = (date_2) => { 
    let difference = date_1.getTime() - date_2.getTime();  //calcolo differenza tra due date. con get time ottendo la data in numero di millisecondi 
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)); // converto la differenza tra due date in giorni, uso iò metodo ceil() per arrotondare un numero decimale all'intero superiore.
    return TotalDays;
}

console.log(howManyDays(new Date('10/25/2021')))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/


function isTodayMyBirthday(birth){ //imposta parametro birth così poi da settare una data nel console log e verificare il funzionamento della funzione rispetto alla data odierna "var today = new Date"
  var today = new Date();
  var nowYear = today.getFullYear(); //variabile con valore anno corrente
  var nowMonth = today.getMonth(); //variabile con valore mese corrente
  var nowDay = today.getDate(); //variabile con valore giorno corrente
   
  var birthYear = birth.getFullYear(); //variabile con valore anno compleanno
  var birthMonth = birth.getMonth(); //variabile con valore mese compleanno
  var birthDay = birth.getDate(); //variabile con valore giorno compleanno
  
  var compBirth = birthMonth.toString() + birthDay.toString(); //converto con tostring i numeri in stringhe per ottenere mese e giorno del compleanno
  var compToday = nowMonth.toString() + nowDay.toString(); //converto con tostring i numeri in stringhe per ottenere mese e giorno della data odierna
  
  
  if( compBirth == compToday) { //costrutto if else per verificare se la data birth in compleanno corrispnde alla data odierna e quindi mi darà true in console log oppure false 
    console.log('True')
  } else {
    console.log('False');
  }
    
}

isTodayMyBirthday(new Date('03/29/2022'));





// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const elemento = function () {
  const container = document.getElementById("container")
  return container  // in alternatina possiamo utilizzare document.querySelector('#container')
}

elemento ();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const tagTd = function () {
const tagTdAll = document.getElementsByTagName("td") //in alternatina possiamo utilizzare document.querySelectorAll
return tagTdAll
}

tagTd ()


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = function () {
  const tags = document.querySelectorAll("td") //con queryselectorall crea un array da ciclare con for of
  for(const tag of tags){
  console.log(tags[i].value)  //in console log vado a leggere il value dei vari tag <td>
}
}
printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const redBackground = function () {
  const links = document.querySelectorAll("a"); //con queryselectorall crea un array da ciclare con for of e assegno a ogni link la proprietà style background color green.
  for(let link of links){

  link.style.backgroundColor = "green";
}
}

redBackground();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addToList = function (content) {

  var ul = document.getElementById("myList");   // inizializzo const e assegno valore prendendo l'elemento myList con metodo getElementById
  var li = document.createElement("li"); //inizializzo const e assegno valore creando un nuovo list item
  li.innerText = content; //con li.innerText assegno contenuto a list item creato prelevando il valore del parametro "content"
  ul.appendChild(li)
  //sfrutto il metodo appendChild per inserire il list item nella list "MyList" come elemento figlio

  }



/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const firstUlDisappear = function () {
  const myList = document.getElementById("myList");  // inizializzo const e assegno valore prendendo l'elemento myList con metodo getElementById 
  myList.remove ();  // rimuovo la lista con il metodo remove
}




// ---> ALTERNATIVA ESERCIZIO 25 <-------

/*const firstUlDisappear = function () {
  const myList = document.getElementById("myList");
  const item = document.getElementById(myList.value);
  myList.removeChild(item);  
}

firstUlDisappear();*/


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/


const addClass = function () {
  const tags = document.querySelectorAll("tr"); //con queryselectorall crea un array da ciclare con for of e assegno a ogni tag "tr " la classe "test"
  for(let tag of tags){

  tag.className = "test";
}
}

addClass();



// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/




/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let newestMovie = { Year: 0 };
  for (let movie of movies) {
    if (eval(movie.Year) >= eval(newestMovie.Year)) {
      newestMovie = movie;
    }
  }
  return newestMovie;
}

newestMovie();
console.log(newestMovie());


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
}

countMovies();
console.log(countMovies());


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  let arr = [];
  for (let movie of movies) {
    arr[arr.length] = movie.Year;
  }
  return arr;
}

onlyTheYears();
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  let arr = [];
  for (let movie of movies) {
    if (eval(movie.Year) < 2000) {
      arr[arr.length] = movie;
    }
  }
  return arr;
}

onlyInLastMillennium();
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  let sum = 0;
  for (let movie of movies) {
    sum += movie.Year;
  }
  return sum;
}

sumAllTheYears();
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str) {
  return movies.filter((movie) => {
    return movie.Title.includes(str);
  });
}

searchByTitle();
console.log(searchByTitle('Avengers: Age of Ultron'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str) {
  let obj = {};
  obj.match = searchByTitle(str);
  obj.unmatch = movies.filter((movie) => {
    return !movie.Title.includes(str);
  });
  return obj;
}

searchAndDivide();
console.log(searchAndDivide('Avengers: Age of Ultron'));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(n) {
  movies.splice(n, 1);
  return movies;
}

console.log(removeIndex(1));