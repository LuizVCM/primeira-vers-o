const menu = document.getElementById('men');
const acao = document.getElementById('more');

menu.addEventListener('click', () => {
    acao.style.opacity = '1';
})

const x = document.getElementById('butone');
const apa = document.getElementById('more');

x.addEventListener("click", () => {
    apa.style.display = 'none';
});