const botao = document.getElementById('sla');
const elementoEscondido = document.getElementById('regulamento');

botao.addEventListener('click', () => {
    elementoEscondido.style.display = 'block';
});

const aceito = document.getElementById('m');
const certeza = document.getElementById('certeza');

aceito.addEventListener('click', () => {
    certeza.style.display = 'block';
});

const voltar = document.getElementById('voltar');
  
voltar.addEventListener('click', () => {
    certeza.style.display = 'none';
} );

const play = document.getElementById('play');
const titulo = document.getElementById('titulo');
const menu = document.getElementById('menu');
play.addEventListener('click',() => {
    menu.style.display = 'block';
} );

    const audio = document.getElementById('audio');
   audio.play();

   const novo = document.getElementById('newgame');
   const menu2 = document.getElementById('new');

 
   if (novo && menu2) {
    novo.addEventListener('click', () => {
      menu2.style.display = 'block';
    });
  } else {
    console.error('Erro: elemento não encontrado');
  }
  
  // ... resto do código ...
  