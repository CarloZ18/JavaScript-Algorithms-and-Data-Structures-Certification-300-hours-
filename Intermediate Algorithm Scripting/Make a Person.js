//Fill in the object constructor with the following methods below:
//getFirstName()
//getLastName()
//getFullName()
//setFirstName(first)
//setLastName(last)
//setFullName(firstAndLast)
//Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object

var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
  
    //Registro firstAndLast con la variable fullName para que se me haga mas facil cambiarlo segun el caso
    var fullName = firstAndLast;
    this.getFullName = function () {
      return fullName;
    };
    //Solo regresar el nombre
    this.getFirstName = function () {
      return fullName.split(" ")[0];
    };
    //Solo regresar el apellido
    this.getLastName = function () {
      return fullName.split(" ")[1];
    };
    //Cambiar nombre
    this.setFirstName = function (word) {
      fullName = word + " " + fullName.split(" ")[1];
    };
    //Cambiar apellido
    this.setLastName = function (word) {
      fullName = fullName.split(" ")[0] + " " + word;
    };
    //Cambiar nombre completo
    this.setFullName = function (word) {
      fullName = word;
    };
  };
  
  var bob = new Person("Bob Ross");