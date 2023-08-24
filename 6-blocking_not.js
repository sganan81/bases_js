const getDataAsync = (i) => {
  setTimeout(()=>{
    //esperando
    console.log(i);
    if(i==5){
      console.timeEnd('label_sync')
    };
  },1000)
}


console.log('Comienzo del programa');
console.time('label_sync');
getDataAsync(1);
getDataAsync(2);
getDataAsync(3);
getDataAsync(4);
getDataAsync(5);
console.log('Fin del programa');