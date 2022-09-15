

/* function getUsuario(id, callback){

} */


const getUsuario = (id, callback) => {

    console.log(`Ingreso del parametro ${id}`);    
    console.log(`Simulación de búsqueda del usuario....`);    

    const user = {
        username:'sganan81',
        nombre:'Sebastian Gañan',
        email:'sganan81@gmail.com'
    }

    callback(user);
}

const id = 10;

/* getUsuario(id,function(param){
    console.log(param)
}); */

//getUsuario(id, console.log );

getUsuario(id, (parametro) => {
    console.log(parametro)
});


