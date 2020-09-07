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


vidaUpdate();

function vidaUpdate() {
    azul.elementoVida.textContent = azul.vida;
    rojo.elementoVida.textContent = rojo.vida;

}

function pelea(){
    let golpeador;
    let golpeado;

    if(this.dataset.peleador === "azul"){
        golpeado = rojo
        golpeador = azul
    }
    else{
        golpeado = azul
        golpeador = rojo
    }

    golpeado.vida = golpeado.vida - golpeador.fuerza;
    vidaUpdate()
    if(golpeado.vida <= 0){
        alert(azul.mensaje);
        azul.elemento.removeEventListener('click', pelea)
    }
}

azul.elemento.addEventListener('click', pelea);
rojo.elemento.addEventListener('click', pelea);

vidaUpdate()

const obj = {
    vida:100
}
const obj2 = obj;

obj2.vida = 50
console.log(obj)

