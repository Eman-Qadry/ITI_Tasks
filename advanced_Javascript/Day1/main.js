/* Day 1 Lab Assignments*/


//1.	Handle onerror event (Or any other event) on the page using Declarative function.

function handleError(event){

    console.log(`An error occurred: ${event.message}`);
}

window.onerror=handleError;
// a.	Change the function from Declarative to literal function (Function expression), without assigning the function to a variable.
window.onerror = function(event) {
    console.log('An error occurred:', event.message);
};

//b.	What’s the difference?
/*
*** Declarative Function	
Definition	Uses function keyword with a name.	
Hoisting	Fully hoisted. Can be used before the definition.	
Naming	Always named.	
Suitability for Events	Directly assignable to events.	

*** Literal Function (Expression)
Definition:Defined as part of an expression (e.g., assigned to a variable or property).
Hoisting:Not hoisted. Must be defined before use.
Naming:Can be anonymous or named.
Suitability for Events:Can be directly assigned or used inline.
*/


// c.	Which type of functions is the best suited for handling the event? And why?
/*
The best-suited function type for handling events depends on the context:

Declarative Function:
Best for reuse across multiple events or when you need to declare the handler beforehand, as it is hoisted.

Literal Function (Expression):
Best for one-off, inline event handlers where reuse is unnecessary, or when the handler needs to be dynamically assigned or modified.
*/

// 2.	Make an Interval that runs each second, and executes logTest function
//  that writes the current time each time it called in the console,
function logTest(){
    var date=new Date();
    var timeElement=date.toLocaleTimeString();
    console.log(timeElement);
}
window.setInterval(logTest,1000);
//   and handle the function to be literal function to be passed to the first parameter to setInterval
//    (Don’t define a function and then pass its name, define the function literally in the first parameter of setInterval()).
window.setInterval(function (){
    var date=new Date();
    var timeElement=date.toLocaleTimeString();
    console.log(timeElement);
},1000);


/* 
a.	Why literal function is better than defining a declarative function, and then passes its name in that case?
Unnecessary Naming:

   If the function logTest is not reused, its name exists unnecessarily in the scope.
Separation of Concerns:

    The definition of logTest and its usage in setInterval are separated, which can make it harder to understand for small, one-off functions.*/
/////////////////////////////////////////////////////

// 3.	Make a script in a body, and ask the user to enter 2 numbers, 
// and then make a Dynamic function to take 2 numbers as parameters and alert the sum of 2 numbers and execute the function.
// a.	Re-declare the function (assign it to the same variable, without deleting the prev. function) to alert the subtract of the 2 numbers, and execute it.
// b.	Re-declare it to alert the multiply of the 2 numbers and execute it.
// c.	Re-declare it to alert the division of the 2 numbers and execute it.

var number1=+prompt("please Enter first number");
var number2=+prompt("please Enter second number");

var sum=new Function("number1","number2"," return number1+number2");
var sub=new Function("number1","number2","return number1-number2");
var mult=new Function("number1","number2"," return number1*number2");
var div=new Function("number1","number2","return number1/number2");
alert("the sum of two numbers is "+sum(number1,number2));
alert("the subtract of two numbers is "+sub(number1,number2));
alert("the multiple of two numbers is "+mult(number1,number2));
alert("the division of two numbers is "+div(number1,number2));
// d.	Why the Dynamic function is the best type for such this case?  it allow change the body at the rumtime

///////////////////////////////////////////////////////////


// 4.	Make an IIFE function expression (Self-invoking function) that executes automatically when the page loads,
//  and initialize some global variable in the page with zero value
//  (Without making an name to the function, or assigning it to a variable, or calling it in onload() event).

(function (){
    window.globalVariable = 0;
    console.log("Hello Every body")
})()

// 5.	Make a function that accepts any number of parameters from user and the return the smallest one
function smallNumber(){
    var argsArray = Array.from(arguments);
    var minElement=Math.min(...argsArray);
    console.log(minElement);
}
smallNumber(7,5,6,4);