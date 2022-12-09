

let div = document.querySelector(".cards");

fetch("users.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((response) => {
      response.forEach((i) => {
        inserisci(i);
      });
  });


function inserisci(item) {
    div.innerHTML += inserisciHtml (item);
}

function inserisciHtml (item) {
    
    let html =
    `<div class="d-inline-flex p-2">
        <div class="card">
            <div class="card-body text-center p-5">
                <img class="p-3 rounded-circle bg-light" src="${item.profileURL}" alt="${item.username}">
                <p class="card-title p-2 fs-4 fw-semibold">${item.firstName} ${item.lastName}</p>
                <a href="mailto:${item.email}" class="text-warning fw-semibold text-decoration-none fs-5 p-2">${item.email}</a>
            </div>
        </div>
    </div>`
    ;

    return html;
}



//METODO ALTERNATIVO con XML 

/*let http = new XMLHttpRequest();
http.open('get', 'users.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let cards = JSON.parse(this.responseText);
      let output = "";
      for(let item of cards){
         output +=
         `<div class="d-inline-flex p-2">
            <div class="card">
                <div class="card-body text-center p-5">
                <img class="p-3 rounded-circle bg-light" src="${item.profileURL}" alt="${item.username}">
                <p class="card-title p-2 fs-4 fw-semibold">${item.firstName} ${item.lastName}</p>
                <a href="mailto:${item.email}" class="text-warning fw-semibold text-decoration-none fs-5 p-2">${item.email}</a>
                </div>
            </div>
        </div>`;
      }
      document.querySelector(".cards").innerHTML = output;
   }
}*/