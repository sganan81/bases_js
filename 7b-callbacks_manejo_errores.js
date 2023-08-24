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

//el callback que voy a retornar tiene 2 parametros (err, persona)
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

//el callback de la función getPersona tiene 2 parametros (err, persona)
getPersona(id, (err, persona)=>{
    if(!err){        
        console.log(persona.apellido)
    }else{
        console.log(err);
    }
});

//Utilizando el if corto para esta función
getCategoria(id, (err, categoria)=>{    
    (!err)?console.log(categoria.nombre):console.log(err);
}); 









