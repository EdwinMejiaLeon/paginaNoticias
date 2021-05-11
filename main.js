/* vamos a seleccionar un elemento con la clase menu-btn y cuando se accione el evento click haga eso*/
document.querySelector(".menu-btn").addEventListener("click", () => {
  /* cambie la clase nav-menu por shhow*/
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
/* el delay es para que aparezca en tanto smicrosegundos*/
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

