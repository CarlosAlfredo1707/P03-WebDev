
const cards = document.querySelectorAll('.card');
const form = document.querySelector(".form-container");
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
    if(nav.classList.contains("display")) {
        nav.classList.remove("display");
    } else {
        nav.classList.add("display");
    }
});
form.addEventListener("submit", () => {
    event.preventDefault();
});

const mostrarCards = (entradas) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
};

const observador = new IntersectionObserver(mostrarCards, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
});

cards.forEach(card => {
    observador.observe(card);
});