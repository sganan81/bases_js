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

//callback
function getPersona(id, callback){    
    const persona = personas.find((item) => {
        return item.id == id
    });
    if(persona){
        callback(null, persona);
    }else{
        callback('La persona no existe');
    }
}
//callback
function getCategoria(id, callback){    
    const categoria = categorias.find((item) => {
        return item.id == id
    });
    if(categoria){
        callback(null, categoria);
    }else{
        callback('La categoria no existe');
    }
}

//Lamada a las funciones de orden superior que llamaran luego a los callbacks
const id = 3;
getPersona(id, (err, persona)=>{
    if(!err){        
        console.log(persona.nombre + ' ' + persona.apellido)
    }
});

getCategoria(id, (err, categoria)=>{
    if(!err){        
        console.log(categoria.nombre)
    }
});

//calbacks anidados
getPersona(id, (err, persona)=>{
    if(!err){                
        getCategoria(id, (err, categoria)=>{
            if(!err){        
                console.log(`La persona ${persona.nombre} ${persona.apellido} tiene la categoría ${categoria.nombre}`);
            }else{
                console.log(`La persona ${persona.nombre} ${persona.apellido} no tiene una categoria asociada`);
            }
        });
    }else{
        console.log('No existe la persona');
    }
});

//Promesas
//Se escriben las misma funcion arriba definidas pero en forma de promesas
const getPersonaPromesa = (id) =>{
    return new Promise(  (resolve, reject)=>{
        const persona = personas.find((item) => item.id == id);
        (persona)? resolve(persona): reject('La persona no existe');
    });
}

const getCategoriaPromesa = (id) => {
    return new Promise(  (resolve, reject)=>{
        const categoria = categorias.find((item) => item.id == id);
        (categoria)? resolve(categoria): reject('La categoria no existe');        
    });   
}

// LLamada a las Promesas mediante el then, catch y finally
const idx = 2;
getPersonaPromesa(idx)
    .then( (persona)=>{console.log(persona)} )
    .catch( err => console.log(err) )
    .finally(() => {
        console.log('getPersonaPromesa::::: Finalmente ');
    });

getCategoriaPromesa(idx)
    .then( (categoria)=>{console.log(categoria)} )
    .catch( err => console.log(err) );    



let nombre = '';
//Promesas en cadena
getPersonaPromesa(idx)
    .then((persona) => {
        nombre = persona.nombre;
        return getCategoriaPromesa(idx);
    } )
    .then((categoria)=>console.log(nombre, categoria))
    .catch( err => console.log(err) ); 


//Asyn Await
const getCategoriaPersona = async(id) => {
    try {
        const persona = await getPersonaPromesa(id);
        const categoria = await getCategoriaPromesa(id);

        console.log(`La persona con id ${id} corresponde a la persona ${persona.nombre} con categoría ${categoria.nombre}`);
    } catch (error) {
        console.log(error);
    }
    
}        
console.log(getCategoriaPersona(3));


