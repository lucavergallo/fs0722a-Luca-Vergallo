// Creare un nuovo item dopo click tasto aggiungi
function nuovotask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Scrivi testo prima di cliccare Aggiungi");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  
  document.getElementById("myInput").value = ""; //mi riporta la CASELLA di input vuota per inserire altri task da aggiungere

  var span = document.createElement("SPAN");

  /*  var span = document.createElement("SPAN");
  var txt = span.innerHTML='<i class="fa-solid fa-trash"></i>';*/

  var txt = document.createTextNode("\u00D7"); /* createTextnode metodo per creare tasto "x" e appenderlo a ogni item*/
  span.className = "cancella";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < cancella.length; i++) {
    cancella[i].onclick = function() {
      this.parentNode.remove();
    }
  }
}


/*PROVA CON ICONA TRASH

<i class="fa-solid fa-trash"></i> 

  var item = document.createElement("li");
  var trush = document.createElement("i");
  item.className = "cancella";
  item.appendChild(trush);
  li.appendChild(item);

  for (i = 0; i < cancella.length; i++) {
    cancella[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

*/


// Funzione per creare tasto "x" e appenderlo a ogni list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cancella";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Funzione per cliccare su tasto "X" e nascondere list item eliminato
var cancella = document.getElementsByClassName("cancella");
var i;
for (i = 0; i < cancella.length; i++) {
  cancella[i].onclick = function() {
    this.parentNode.remove();
  }
}


// Funzione per aggiungere "barra" ai vari list item quando cliccati
var list = document.querySelector('ul');
list.addEventListener('click', function(click) {
  if (click.target.tagName === 'LI') {
    click.target.classList.toggle('cliccato');  //toogle=toggle() (metodo) rende visibile o nascosto un elemento a seconda che esso sia, rispettivamente, già nascosto o oppure già visibile.
  }
}, false);