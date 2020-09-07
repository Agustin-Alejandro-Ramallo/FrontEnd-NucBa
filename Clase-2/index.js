// var variable = 10;
//let otraVariable = "string";
// const constante = {clave:'valor'};

/*const dias = domingo;

const numero = 1000;
const string = 'oraciones largas o cortas';
const string2 = 'Hoy es $(dias)';

//console.log(string2);
*/
const booleano = true
const array = ['string', 89, [false,"hola"],"otra cosa"];

//console.log(array[2][1])

const objeto = {
    clave: 'valor',
    nombre: 'Ricardo',
    edad:10,
}

//console.log(objeto.edad)
//console.log(objeto['nombre'])

//console.log(array.length)

const indefinido = undefined;
const nulo = null;

//indefinido.algo

//condicionales
/*if (objeto.edad === 10) {
   // console.log('dio positivo')
}
else{
    //console.log('dio negativo')
}

const arrayEjemplo = [1,2,14,35,5,89,46]
for (let i = 0; i < arrayEjemplo.length; i++) {
    console.log(arrayEjemplo[i])
    
}

let iwhile = 0
while(iwhile <10){
    console.log(iwhile)
    iwhile++
}*/

//funciones
/*function nombre(arg, arg2) {
    console.log(`Hola ${arg}`)
    if (arg2) {
        console.log(`Hola ${arg}!!!!!`)
    }
}

nombre('mundo')
nombre('carlitos' , "juanita")
nombre()*/

//DOM

//const parrafo = document.getElementById("parrafo")

//console.log(parrafo)

// click

const imagen = document.queryselector('img');
imagen.addEventListener('click', callback);

function callback(){
    //console.log('click')
    imagen.classList.toggle('desactivado')
}