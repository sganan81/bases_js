//Función standart de orden superior que llama al callback
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

//utilizando la palabra function
getUsuario(id,function(param){
    console.log(param)
});

//Función de flecha
getUsuario(id, (parametro) => {
    console.log(parametro)
});

//Cuando existe un único parametro y este se utiliza en el resultado de la función
getUsuario(id, console.log );


