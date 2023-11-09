// Escribe tu código aquí:

const Persona = {nombre: 'Juan',
                edad: 25,
                'ciudad': 'Madrid'
}

for (const rasgo in Persona) {
    console.log(rasgo, Persona[rasgo], typeof(rasgo), typeof(Persona[rasgo]))
    
}

Persona['nombre'] = 'Carlos'
Persona['edad'] = 28
Persona.ciudad = 'Sevilla'

console.log(Persona['nombre'], Persona.edad, Persona['ciudad'])

const lista = []
lista.push(Persona)

for (const i of lista) {
    console.log(i)
}

const lista2 = ['Pepe', 2, 'Juan', Persona]

for (const i of lista2){
    console.log(i)
}
