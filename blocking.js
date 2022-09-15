const getData = (pasada) => {
  for(let i = 0; i < 999999999;i++){
    const oper = ((i * 10) / (i + 1)) * (i * pasada);
  }
  console.log(pasada);

}


console.log('Comienzo del programa');
console.time('label_sync');
getData(1);
getData(2);
getData(3);
getData(4);
getData(5);
console.timeEnd('label_sync');
console.log('Fin del programa');


