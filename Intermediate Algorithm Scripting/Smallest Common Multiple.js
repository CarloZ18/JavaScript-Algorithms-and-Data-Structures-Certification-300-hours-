//coloca el enunciado siempre para que sepas que resuelve este algoritmo

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/

function smallestCommons(arr) {
  // extraemos el numero minimo y el numero maximo de la arr
  let max = Math.max(...arr); //esta logica es innecesaria siempre vas a tener dos numeros
  let min = Math.min(...arr);// esta logica itera entre el array para ver el max y el min
    
  // la logica de abajo no itera sino compara ya que siempre tendras solo dos inputs
  //te propongo esta logica : solo comparando el arr 0 con el arr 1
  /*
   const max=arr[0]>arr[1]?arr[0]:arr[1]
   const min = max === arr[0]?arr[1]:arr[0]
   */

  let sol = min;
  //estudio el intervalo entre los numeros dados y veo si es multiplo entre cada uno de estos numeros
  for (let i = min; i <= max; i++) {
    //en caso de que sea multiplo se agrega a la solucion, si no es multiplo no
    //con esta condicion vemos si los numeros son divisibles entre nuestra solucion
    //de donde sacaste esta logica, esta muy buena!!!
    if (sol % i) {
      sol += min;
      i = min;
    }
  }
  console.log(sol); //al finalizar se quitan los logs del codigo a no ser que se desee informar algo a los usuarios

  return sol;
}

smallestCommons([1, 5]);
