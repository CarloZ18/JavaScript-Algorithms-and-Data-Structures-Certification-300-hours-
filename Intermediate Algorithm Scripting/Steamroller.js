//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    //Creamos una matriz vacia
    var newArr = [];
    //Iteramos entre cada elemento de arr
    for (let i = 0; i < arr.length; i++) {
      //Determinamos si el elemento o subelemento es una matriz o no, en caso de no ser una matriz, simplemente se envia a la newArr. En caso de ser una matriz se concatena a la newArr para de esta manera eliminar los corchetes unir los elementos. Para esto se crea una variable que me señale todos aquellos subelementos de la matriz.
      if (Array.isArray(arr[i]) === false) {
        newArr.push(arr[i]);
      } else {
        var subArr = steamrollArray(arr[i]);
        newArr = newArr.concat(subArr);
      }
    }
    return newArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);