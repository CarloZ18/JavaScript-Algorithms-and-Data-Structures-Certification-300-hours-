//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.

function binaryAgent(str) {
    //Indico 2 variables la cadena binaria (esta la divido por conjunto de números binarios) y la cadena de valores unicode
    var biString = str.split(" ");
    var uniString = [];
  
    // itero entre cada conjunto de numeros binarios y voy pasando cada uno a numero decimal con parseInt(), luego estos los transformo en letra con fromCharCode()
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    console.log(uniString);
    return uniString.join(""); //Vuelvo a unir las palabras para que se forme la oración
  }
  