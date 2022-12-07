// Creare un nuovo item dopo click tasto aggiungi

function nuovotask() {
  var myInput = document.querySelector("#myInput").value;
  let = i;

  localStorage.setItem(`myInput'${i}`, myInput);
  i++;

  var li = document.createElement("li");
  var t = document.createTextNode(myInput);
  li.appendChild(t);
  if (myInput === '') {
    alert("Scrivi testo prima di cliccare Aggiungi");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  
  document.getElementById("myInput").value = ""; //mi riporta la CASELLA di input vuota per inserire altri task da aggiungere

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); /* createTextnode metodo per creare tasto "x" e appenderlo a ogni item*/
  span.className = "cancella";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < cancella.length; i++) {
    cancella[i].onclick = function() {
      this.parentNode.remove();
      localStorage.removeItem(`myInput`)
    }
  }
}



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


window.addEventListener("load", check);
        function save(){
          
            check();
        }
        function deleteData(){
            
            check();
        }
        function check(){
            if(localStorage.getItem('myInput')){
                txt = "Task: " + localStorage.getItem("myInput");
            }else{
                txt = 'No Data';
            }
            document.querySelector(".title").innerHTML = txt;
        }