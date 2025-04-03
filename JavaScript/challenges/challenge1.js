function test() {
    var a = "3";
    var b = "8";
    var aux = "0";
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
aux=b;
b=a;
a=aux;
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}


function test() {
    var a = "3";
    var b = "8";
   
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:

a = a + b; b = a - b; a = a - b;

/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}
