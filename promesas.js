
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

const id = 3;


getPersona(id)
    .then((persona)=>{        
        console.log(persona)          
    })
    .catch((err)=>{            
        console.log(err)
    });

getCategoria(id)
    .then((cat)=>{        
        console.log(cat)          
    })
    .catch((err)=>{            
        console.log(err)
    });
