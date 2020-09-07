///BUBBLE y CAPTURING

const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')

uno.addEventListener('click', (e)=> {
    e.stopPropagation()
    console.log(e.target)
    console.log('UNO')

}, true)
dos.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('DOS')
}, true)
tres.addEventListener('click', (e)=> {
    e.stopPropagation()
    console.log('TRES')
}, true)

//Funciones iteradoras

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

/*const diasMapeados = dias.map((item)=> {
    return '<p>${item}<p>'
})

console.log(diasMapeados)*/

//const diasFiltrados = dias.filter( item => item.length > 5)
//console.log(diasFiltrados)

//dias.forEach((item, index) => console.log(item,index))

const diasReducidos = dias.reduce((accu,item) =>{
    console.log(accu, 'accu')
    console.log(item, 'item')
    return accu + item + '';
})

console.log(diasReducidos)