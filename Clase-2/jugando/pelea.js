const azulEl = document.querySelector("#azul");
const rojoEl = document.querySelector("#rojo");

const azul = {
  vida: 100,
  fuerza: 10,
  elemento: document.querySelector("#azul"),
  elementoVida: document.querySelector("#vidaAzul"),
  mensaje: "Has morido"
};

const rojo = {
  vida: 100,
  fuerza: 10,
  elemento: document.querySelector("#rojo"),
  elementoVida: document.querySelector("#vidaRojo"),
  mensaje: "En tu cara azulito"
};

reset();
vidaUpdate();

function vidaUpdate() {
  azul.elementoVida.textContent = azul.vida;
  rojo.elementoVida.textContent = rojo.vida;
}

function vidaUpdate() {
    azul.elementoVida.textContent = azul.vida;
    rojo.elementoVida.textContent = rojo.vida;

}

function reset() {
    rojo.vida = 100;
    azul.vida = 100;
    azul.elemento.addEventListener("click", peleaAzul);
    rojo.elemento.addEventListener("click", peleaRojo);
    azul.elemento.style.opacity = "1";
    rojo.elemento.style.opacity = "1";
    vidaUpdate();
  }
  
  function peleaAzul() {
    if (rojo.vida > 0) {
        rojo.vida = rojo.vida - azul.fuerza;
        vidaUpdate();
        const opacidad = rojo.vida / 100;
        rojo.elemento.style.opacity = String(opacidad);
    } else {
        alert(azul.mensaje);
        azul.elemento.removeEventListener("click", peleaAzul);
        reset();
    }
  }
  
  function peleaRojo() {
    if (azul.vida > 0) {
        azul.vida = azul.vida - rojo.fuerza;
        vidaUpdate();
        const opacidad = azul.vida / 100;
        azul.elemento.style.opacity = String(opacidad);
    } else {
        alert(rojo.mensaje);
        rojo.elemento.removeEventListener("click", peleaRojo);
        reset();
    }
  }
  