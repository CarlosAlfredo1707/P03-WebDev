
const cards = document.querySelectorAll('.card');

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