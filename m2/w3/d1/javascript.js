

    function Persona(nome, eta) {
        this.nome = nome;
        this.eta = eta;
    }


button.addEventListener("onclick", function ()  {
    function addRow(){
        var table = document.getElementById('table');
        var row = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.innerHTML = document.getElementById('nome').value;
        td2.innerHTML = document.getElementById('eta').value;
        row.appendChild(td1);
        row.appendChild(td2);
        table.children[0].appendChild(row);
    }
})


//come appendere i valori in tabella



function addRow(){
    var table = document.getElementById('table');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.innerHTML = document.getElementById('nome').value;
    td2.innerHTML = document.getElementById('eta').value;
    row.appendChild(td1);
    row.appendChild(td2);
    table.children[0].appendChild(row);
}


function addRow();

