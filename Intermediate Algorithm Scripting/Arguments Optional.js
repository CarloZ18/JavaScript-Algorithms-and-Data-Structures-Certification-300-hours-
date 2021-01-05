//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. Calling this returned function with a single argument will then return the sum: var sumTwoAnd = addTogether(2); sumTwoAnd(3) returns 5. If either argument isn't a valid number, return undefined.

function addTogether(a, b) {
    // Si el primer argumento no es un número nos da indefinido
    if (typeof a !== "number") {
      return undefined;
    }
    // en esta funcion se determina lo que se va a hacer en caso de que el segundo argumento sea numero, si no lo es, o si no esta definido. Si es un numero se suma con el primero, si no lo es da indefinido, pero si el segundo argumento no esta definido dentro de la misma función se toma el proximo argumento y finalmente se suman , si esta definido simplemente queda igual
    const sum = (b) => (typeof b === "number" ? a + b : undefined);
    return typeof b === "undefined" ? (b) => sum(b) : sum(b);
  }
  