const DURACAO_DO_MOVIMENTO = 500;
let anguloDirecao = 0; 
const balde = document.querySelector('#especifico');
let posicaoOriginal = 0

const transicaoDirecao = `all ${DURACAO_DO_MOVIMENTO}ms ease`;
balde.style.transition = transicaoDirecao;

function alternarDirecao() {
        if (anguloDirecao === 0) {
            anguloDirecao = Math.PI;
        } else {
            anguloDirecao = 0;
        }
    }

balde.addEventListener('click', e => { 

    alternarDirecao();
    let distanciaPercorrida = 180;

    balde.style.opacity = 0.7;
    balde.style.pointerEvents = 'none';

    if (anguloDirecao === 0) {
        balde.style.transform = `translateX(${posicaoOriginal}px)`;
    } else {
        balde.style.transform = `translateX(-${distanciaPercorrida}px)`;
    }

    setTimeout(() => {
      balde.style.pointerEvents = 'initial';
      balde.style.removeProperty('opacity');
    }, DURACAO_DO_MOVIMENTO);
    
})