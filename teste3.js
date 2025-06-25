// Eventos e funções específicas para o teste3.html

document.addEventListener('DOMContentLoaded', function() {
    const botao = document.querySelector('#newgame');

    if (botao) {
        botao.addEventListener('click', () => {
            const elementoEscondido = document.querySelector('#new');

            if (elementoEscondido) {
                const estiloAtual = window.getComputedStyle(elementoEscondido).display;

                if (estiloAtual === 'none') {
                    elementoEscondido.style.display = 'block'; // Mostra o menu de dificuldade
                } else {
                    elementoEscondido.style.display = 'none'; // Esconde o menu de dificuldade
                }
            } else {
                console.error('Erro: elemento não encontrado');
            }
        });
    } else {
        console.error('Erro: botão não encontrado');
}
});

const veryEasy = document.getElementById('very');
const negocio = document.getElementById('gh');

veryEasy.addEventListener('click', () => {
    negocio.style.marginBottom = '300px';
});

const nao = document.getElementById('nao');
 
nao.addEventListener('click', () => {
    negocio.style.marginBottom = '1400px';
});

const sim = document.getElementById('sim');
const black = document.getElementById('vw');
const con = document.getElementById('con');

sim.addEventListener('click', () => {
    black.style.marginBottom = '100px';
    con.style.animation = ' bm 60s forwards';
});
