function smallestCommons(arr) {
    // extraemos el numero minimo y el numero maximo de la arr
   let max = Math.max(...arr);
    let min = Math.min(...arr);
  
    let sol=min;
  //estudio el intervalo entre los numeros dados y veo si es multiplo entre cada uno de estos numeros
    for(let i = min; i<=max; i++){
  //en caso de que sea multiplo se agrega a la solucion, si no es multiplo no
  //con esta condicion vemos si los numeros son divisibles entre nuestra solucion
      if(sol % i){
         sol += min;
        i = min;
      }
    }
  console.log(sol)
  
    return sol ;
  }
  
  
  smallestCommons([1,5]);