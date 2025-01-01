//ex1
document.write("Hello 3")
console.log("helllo here");
var numberOne = 10, numberTwo = 20;
console.log("Sum is " + (numberOne +numberTwo));

console.log(value); //this is hosting to variable output undefined

var value=20;
console.log(value);

//ex2+
//hosting to functions;
declare();
function declare(){
    var value=10;
    console.log(value);
};

//ex3
const age = prompt("please inter your age");

if (isNaN(age)) {
    console.log("Invalid age");
} else if (age < 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20) {
    console.log("Adult");
} 

//ex4
function concat(name,age){
    const nameAndAge=name+age;
    console.log(typeof(nameAndAge));
    console.log(typeof(nameAndAge)==="string");
    
    console.log("5"+3+5); //535
    console.log(5+3+"5");//85

}
concat("eman",23);
//ex5
const input2 = prompt("please inter your grade");
const grade = parseInt(input2, 10);
if (isNaN(grade) || grade < 0 || grade > 100) {
    console.log("Invalid grade ");
}
else{
switch(true){
case (grade>=90 && grade<=100):
    console.log("A");
     break;

case (grade>=80 && grade<=89):
    console.log("B");
    break;

case (grade>=70 && grade<=79):
     console.log("C");
      break;

case (grade>=60 && grade<=69):
    console.log("D");
    break;
default:
    console.log("F");
}
}
//ex6
for (var i=0;i<100 ;i++){
    if (i==50)
        break;
    else 
    console.log(i);
}
//ex7
 function calculateFactorial(number){
    var result=1;
    for (var i=1;i<=number;i++){
   result*=i;

    }
    return result;
 }
 console.log(calculateFactorial(5))

 //ex 8
function isPrime(number){
    if (number<2)
        return false;
    else if (number===2)
        return true;
    else {
        for (var i=2;i<=Math.sqrt(num);i++){
            if (num%i===0) return false;
            
        }
        return true;
    }
}
 var num=2;
 while (num<=50){
    if (isPrime(num))
    console.log(num);
    num++;
 }


//ex9
function add(...args){
    if (args.length===0)
        return 0;
    else  if (args.length===2)
        return args[0]+args[1];
    else  if (args.length===3)
        return args[0]+args[1]+args[2];
}



console.log(add())  // Output: 0
console.log(add(1, 2))  // Output: 3
console.log(add(1, 2, 3))  // Output: 6


// //ex10
function personDescription() {

    const person = {
        name: "eman",
        age: 23,
        hobby: "painting",

        
        describe: function () {
            console.log(`My name is ${this.name}, I am ${this.age} years old, and I enjoy ${this.hobby}.`);
        }
    };

    
    person.describe();
};
personDescription() ;

//ex11
function greetUser(name){
    console.log(`hello,${name}`);
}
greetUser("eman");


//ex12
function calculateTotal(price,tax){
    return (price+price*tax);
}
console.log(calculateTotal(0.1,0.1));

//ex13  
function isEven(num){
    if(num%2===0)
        return true;
    else
    return false;
}
console.log(isEven(20));
//ex14
function getMax(num1,num2){
    if (num1>num2)
        return num1;
    else if (num1<num2)
        return num2;
    else 
    return "Numbers are equal";
}
console.log(getMax(5,4));
//ex15
function multiplyNumbers(num1,num2){
    return num1*num2;
}
console.log(multiplyNumbers(5,4));


(function (number){
    if (number%2===0)
        console.log("Even number");
    else 
    console.log("Odd number");
})(6);