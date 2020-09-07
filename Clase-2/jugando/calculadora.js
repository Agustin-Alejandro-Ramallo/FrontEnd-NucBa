const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const sumar = document.querySelector('#sumar')
const resultado = document.querySelector('#resultado')

sumar.addEventListener('click', sumarFn);

function sumarFn(){
    const value1 = Number(numero1.value);
    const value2 = Number(numero2.value);
    const result = value1 + value2
    resultado.textContent = result
    //console.log(Number(numero1.value) + Number(numero2.value))
}