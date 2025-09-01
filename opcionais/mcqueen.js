const DURACAO_DO_MOVIMENTO = 1000;
let anguloDirecao = Math.PI; 
const mcqueen = document.querySelector('#mcqueen');
let posicaoOriginal = 0
let larguraDisponivelNaPagina = document.body.clientWidth;

const transicaoDirecao = `all ${DURACAO_DO_MOVIMENTO}ms ease`;
mcqueen.style.transition = transicaoDirecao;

mcqueen.addEventListener('click', e => { 

    let distanciaPercorrida = larguraDisponivelNaPagina;

    mcqueen.style.opacity = 1;
    mcqueen.style.pointerEvents = 'none';
    mcqueen.style.width = '5%';
    mcqueen.style.transform = `translateX(-${distanciaPercorrida}px)`;

    setTimeout(() => {
      mcqueen.style.pointerEvents = 'initial';
      mcqueen.style.removeProperty('opacity');
    }, DURACAO_DO_MOVIMENTO);
    
})