//Compruebe si el predicado (segundo argumento) es veraz en todos los elementos de una colección (primer argumento). En otras palabras, se le da una colección de matriz de objetos. El predicado preserá una propiedad de objeto y debe devolver truesi su valor es truthy. De lo contrario, regrese false. En JavaScript, los truthyvalores son valores que se traducen truecuando se evalúan en un contexto booleano. Recuerde, puede acceder a las propiedades del objeto mediante notación de puntos o []notación.

function truthCheck(collection, pre) {
    return collection.every((obj) => obj[pre]); //utilizo every() para determinar si la collection contiene la propiedad pre
  }
  