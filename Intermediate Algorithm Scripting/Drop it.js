function dropElements(arr, func) {
    var afuera=[]
    var adentro=[]
    // itero entre los valores dentro de la matriz
    for(let i=0; i<arr.length;i++){
      // si el valor en la matriz no cumple con la condición es enviado a la matriz "afuera"
      if(func(arr[i]) ===  false && afuera.includes(arr[i]) === false){
   afuera.push(arr[i])
   // si el valor cumple con la condicion es enviado a la matriz "adentro" y devuelve ese resultado
      }else{
         adentro.push(arr[i])
      }
      console.log(afuera)
    }
   return adentro ;
  }
  
  
  dropElements([1, 2, 3], function(n) {return n < 3; });