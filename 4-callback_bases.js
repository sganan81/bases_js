// https://www.freecodecamp.org/espanol/news/que-es-una-funcion-callback-javascript/

// Una función callback es aquella que es pasada como argumento a otra función para que sea 
// "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones 
// como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para 
// determinar cuándo se ejecuta la función callback. 

  function crearCita(cita, callback){ 
    let miCita = "Como yo siempre digo, " + cita;
    callback(miCita); // 2
  }
  
  function logCita(cita){
    console.log(cita);
  }

  //Referencia a la función (logCita) definida anteriormente
  crearCita("come tus vegetales!", logCita); // 1

  // -------------------------------------------------------
  // Función definida como argumento de la función de orden superior crearCita
  crearCita("come tus vegetales!", function(cita){ 
    console.log(cita); 
  });
  // -------------------------------------------------------

  // Función de flecha
  crearCita("come tus vegetales!", (cita) => {
    console.log(cita); 
  });

  //Si la función solo contiene una linea se puede escribir de la siguiente manera
  crearCita("come tus vegetales!", (cita) => console.log(cita));




  