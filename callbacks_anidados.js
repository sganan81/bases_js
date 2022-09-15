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


const id = 2;

getPersona(id, (err, persona)=>{
    if(!err){                
            getCategoria(id, (err, categoria)=>{    
            if(!err){                
                console.log(`Se encontro la persona ${persona.apellido} con categoría ${categoria.nombre}`);
            }else{
                console.log(err);
            }
        });     
    }else{
        console.log(err);
    }
});










