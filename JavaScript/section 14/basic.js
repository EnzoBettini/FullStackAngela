alert(2+3);


typeof(123); // outupt -> number
typeof("hello world!"); // output -> string
typeof(true); // output -> boolean
console.log(typeof(null)); // output -> object

prompt("What's you name?");

var myName = "Enzo";
 
alert(myName);

var personName = prompt("Whats your name?"); //give a variable the input of prompt
alert("My name is: " + personName + secondName);

alert("hello" + " world"); // concatenation of strings

var nameLenght = "Enzo Bettini";
nameLenght.length; // works like strlen
nameLenght.slice(0,1); //output -> E
nameLenght.slice(0,3); //output -> Enz
//variablename.slice(x,y) -> x beggining / y ending

var nameUpper = "Enzo Bettini";
nameUpper = nameUpper.toUpperCase(); // puts nameUpper upper case than puts the name in the variable
nameUpper = nameUpper.toLowerCase();

Math.floor(3.9); // rounds down to the nearest integer 
Math.ceil(3.1); // rounds up to the nearest integer
Math.round(3.5); // rounds to the nearest integer
Math.pow(2,3); // 2^3 = 8
Math.sqrt(16); // square root of 16 = 4
Math.random(); // generates a random number between 0 and 1