window.addEventListener("scroll" ,function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 10);
    header.classList.toggle("sticky nav button", window.scrollY > 10);
    
  });

