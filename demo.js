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


const id = 3;
/* getPersona(id, (err, persona)=>{
    if(!err){        
        console.log(persona.apellido)
    }
});

getCategoria(id, (err, categoria)=>{
    if(!err){        
        console.log(categoria.nombre)
    }
}); */


/* getPersona(id, (err, persona)=>{
    if(!err){        
        console.log(persona.apellido)
        getCategoria(id, (err, categoria)=>{
            if(!err){        
                console.log(`La persona ${persona.nombre} tiene la categoría ${categoria.nombre}`);
            }else{
                console.log('No existe la categoria');
            }
        });
    }else{
        console.log('No existe la persona');
    }
}); */


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

const idx = 2;
/* getPersonaPromesa(idx)
        .then( (persona)=>{console.log(persona)} )
        .catch( err => console.log(err) );

getCategoriaPromesa(idx)
        .then( (categoria)=>{console.log(categoria)} )
        .catch( err => console.log(err) ); */

/* let nombre = '';
getPersonaPromesa(idx)
        .then((persona) => {
            nombre = persona.nombre;
            return getCategoriaPromesa(idx);
        } )
        .then((categoria)=>console.log(nombre, categoria))
        .catch( err => console.log(err) ); */


const getCategoriaPersona = async(id) => {
    try {
        const persona = await getPersonaPromesa(id);
        const categoria = await getCategoriaPromesa(id);

        console.log(`LA persona con id ${id} corresponde a la persona ${persona.nombre} con categoría ${categoria.nombre}`);
    } catch (error) {
        console.log(error);
    }
    
}        

console.log(getCategoriaPersona(3));



