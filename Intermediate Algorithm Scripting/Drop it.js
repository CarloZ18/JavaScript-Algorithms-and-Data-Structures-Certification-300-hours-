function dropElements(arr, func) {
  var afuera = [];
  var adentro = [];
  // itero entre los valores dentro de la matriz
  for (let i = 0; i < arr.length; i++) {
    // si el valor en la matriz no cumple con la condición es enviado a la matriz "afuera"
    if (func(arr[i]) === false && afuera.includes(arr[i]) === false) {
      afuera.push(arr[i]);
      // si el valor cumple con la condicion es enviado a la matriz "adentro" y devuelve ese resultado
    } else {
      adentro.push(arr[i]);
    }
    console.log(afuera);
  }
  return adentro;
}
  
/*revision
Investiga que es "time complexity". Basicamente, es el tiempo que se tarda un algoritmo en 
completar.

En este caso si quisieramos optimizar tu solucion lo que veo es que en cada iteracion del "for"
se hace otra iteracion en el comando "array.includes()" que basicamente revisa en todo el array hasta encontrar
un elemento. Entonces se hace una iteracion por cada iteracion.

*/
  
/*Mi Propuesta: 

basicamente itero en el array y voy eliminando hasta que sea true la condicion y me salgo de la iteracion.

en cuanto a solucion optima, esta solucion solo itera hasta encontrar que sea true la condicion y me salgo de bucle. Por ende,
esta propuesta soluciona el problema mas rapido en menos iteraciones.

*/
/* 

function dropElements(arr, func) {
  const result = [...arr];                  //copio el arr para asegurar la inmutabilidad del arr de entrada (investiga inmutabilidad)
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {                    //mientras la funcion no sea true voy eliminando
      result.shift();
    } else {                                //cuando es true simplemente hago break para dejar de iterar 
      break;
    }
  }
  return result;
}
*/
