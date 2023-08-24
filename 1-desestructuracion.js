

const persona = {
    nombre: 'Sebastian',
    apellido: 'Gañan',
    email: 'sganan81@gmail.com',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.edad }`
    }
}


const dni    = persona.dni || 'NOT_FOUND';

const { nombre, apellido, email } = persona;

console.log(nombre, apellido, email, dni );

function imprimePersona({ nombre:nombre2, apellido, email, edad = 0 }) {
    nombre2 = 'Seba';
    console.log(nombre2, apellido, email, edad );
}

imprimePersona( persona );

const frutas = ['Banana', 'Manzana', 'Pera'];

// const f1 = frutas[0];
// const f2 = frutas[1];
// const f3 = frutas[2];
const [ fruta1 , fruta2 , fruta3 ] = frutas;


console.log( f3 );






