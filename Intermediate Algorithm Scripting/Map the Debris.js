//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

//You can read about orbital periods on Wikipedia.

//The values should be rounded to the nearest whole number. The body being orbited is Earth.

//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    //Se trabaja en cada uno de los elementos que se encuentran en el array gracias a forEach()
    arr.forEach(function (item) {
      //Se agrega el elemento orbitalPeriod, el cual va a estar representado por toda la operacion que nos lleva al valor del mismo.
      item.orbitalPeriod = Math.round(
        Math.PI * 2 * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
      );
      //Finalmente se elimina el elemento avgAlt que ya no vamos a necesitar
      delete item.avgAlt;
      console.log(item);
    });
  
    return arr;
  }
  
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);