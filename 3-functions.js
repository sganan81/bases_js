// https://www.freecodecamp.org/espanol/news/funciones-callback-en-javascript-que-son-los-callback-en-js-y-como-usarlos/
// ----------------------------------------------------------------------
// Funciones de flecha
// ----------------------------------------------------------------------

const funcionStd = function() {  
    console.log("Esta es una función normal");
}

funcionStd();


const funcionFlecha = () => {  
    console.log("Esta es una función de flecha");
}

funcionFlecha();

const funcionFlechaUnaLinea = () => console.log("Esta es una función de flecha en una linea");

funcionFlechaUnaLinea();


// ----------------------------------------------------------------------
// Callbacks
// ----------------------------------------------------------------------

const mensaje = function() {  
    console.log("Este mensaje se muestra después de 3 segundos");
}
setTimeout(mensaje, 3000);

 
setTimeout(function() {  
    console.log("CALLBACK - Este mensaje se muestra después de 3 segundos");
}, 3000);

setTimeout(() => console.log("CALLBACK Funcion de Flecha- Este mensaje se muestra después de 3 segundos"), 3000);

// ----------------------------------------------------------------------
 
 