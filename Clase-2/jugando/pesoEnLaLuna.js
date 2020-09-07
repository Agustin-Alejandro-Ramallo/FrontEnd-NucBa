const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado')

peso.addEventListener('input', calbackInput)

function calbackInput(){
    calcularPeso()
    calcularPeso()
}

function calcularPeso(){
    const res = peso.value
    const resLuna = Number(res) / 6;
    resultado.textContent = resLuna
}
function comprobar(){
    const tamano = peso.value.length;
    if(tamano < 10 || tamano> 20){
        peso.classList.add('error')
    }
    else{
        peso.classList.remove('error')
    }
}