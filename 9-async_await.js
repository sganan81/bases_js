
const personas = [
    {
        id:1,
        apellido:'Perez',
        nombre:'Juan'
    },
    {
        id:2,
        apellido:'Garcia',
        nombre:'Pablo'
    },
    {
        id:3,
        apellido:'Gonzalez',
        nombre:'Nancy'
    }
];

const categorias = [
    {
        id:1,        
        nombre:'Gerente'
    },
    {
        id:2,        
        nombre:'Director'
    },
];

const getPersona = (id) => {
   
    const promesa = new Promise( (resolve, reject)=>{
        const persona = personas.find((item) => {
            return item.id == id
        });
        if(persona){
            resolve(persona);
        }else{
            reject('No se encontró la persona');
        }        
    })
    return promesa;
}

const getCategoria = (id) => {
   
    const promesa = new Promise( (resolve, reject)=>{
        const categoria = categorias.find((item) => {
            return item.id == id
        });
        if(categoria){
            resolve(categoria);
        }else{
            reject('No se encontró la categoría');
        }        
    })
    return promesa;
}

//Manejo de Async y Await
const getCategoriaPersona = async(id) => {    
    try {
        
        console.log('comienzo');
        console.log('llamo a getPersona');
        const persona = await getPersona(id);           
        console.log('finaliza ejecución de getPersona');
        console.log('llamo a getCategoria');
        const categoria = await getCategoria(id);   
        console.log('finaliza ejecución de getCategoria');
        console.log(`La persona con nombre ${persona.nombre} tiene la categoría ${categoria.nombre}`);
    } catch (error) {
        console.log('error',error);        
    }   
      
}

const id = 3;
getCategoriaPersona(id);