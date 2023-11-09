// Escribe tu código aquí:
if (true){
    variable = 'Variable dentro de if' // variable global
    const variabl2 = 'Variable2 dentro de if' // variable local al bloque if
    console.log('Dentro del if', variabl2)
}
console.log('Fuera del if', variable)
console.log('Fuera del if', variabl2) // da error porque en este ambito no esta definida variable2 solo dentro del if