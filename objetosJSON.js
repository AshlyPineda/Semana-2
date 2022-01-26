const fs = require('fs') //Llamar a la libreria 

var vehiculos = JSON.parse( fs.readFileSync('data.json') )  //Esta leyendo el programa de data.json
//Cuando se utiliza dos puntos es que va una carpeta hacia atras ('../data.json')


/*
////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(vehiculos)

//Recorre el arreglo de la forna tradicional //Arreglo de vehiculo
for(let i=0; i<5; i++){ 
    console.log('Vehiculos numero$ {i+1} :$ {vehiculos[i].marca}')
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


//Recorre el arereglo usando la funcion Each tipo flecha
vehiculos.forEach(item => console.log(item)); //Recorre los elementos


console.log(vehiculos)

//Agregar datos al arreglo
vehiculos.push({'marca': 'KIA', 
               'color':'blanco', 
               'año': 2022})
fs.writeFileSync('data.json', JSON.stringify(vehiculos))  //Manda a escribir el arreglo de vehiculos


//Como editar un objeto, seleccionar y editarlo TAREA2