console.log("Script is running...");


var student={
   "name":"Eman Qadry",
    "age":23,
    "grade":'B'
};
student.subject="programming";
student["grade"]='A';
delete student.age;
if ("age" in student){
    console.log("exists");

}
else{
console.log("deleted");
}

//string Analysis
function analyzeString(word){
    var obj={
        "length":word.length,
        "firstChar":word.charAt(0),
        "lastChar":word.charAt(word.length-1),
        "wordCount": word.trim().split(/\s+/).length 
        // \s whitespace  + one or more
    }
    return obj;
}
//string search 
console.log(analyzeString("Eman Qadry Ahmed"));
var output="Hello ITI, welcome to JavaScript world. ITI is great!";
console.log(output.indexOf("ITI"));
console.log(output.lastIndexOf("ITI"));
output=output.replaceAll("ITI","Facebook");
console.log(output);

//confirm and prompt
var name=prompt("please input your name");
var result=confirm("do you want to proceed")
if (result){
    console.log(`welcome ${name}`);
}
else {
    console.log("Operation Canceled");
}

//Array Manipulation
var arr=[10,20,30,40];
arr.push(50);
arr.unshift(0);
arr.splice(1,1);
arr.splice(2,1,100);
console.log(arr);


//Merge and Slice Arrays
var number1=[0,1,2];
var number2=[3,4,5];
var names=["eman","qadry","ahmed"];
var number3=number1.concat(number2).concat(names);
console.log(number3);
var sliced=number3.slice(3,6);
console.log(sliced);

//array methods
var arr2=[1, 2, 3, 4, 5];
for (var i=0;i<arr2.length;i++){
    arr2[i]*=2;
    
}
console.log(arr2);
for (var i=0;i<arr2.length;i++){
  if(arr2[i]>6){
    arr2.splice(i,1);
    i--;
  }
    
}
console.log(arr2);

//prompt calculation
var inputExpr=prompt("Enter ecpression to evaluate");
var result=eval(inputExpr);
if (isFinite(result) && !isNaN(result)) {
    console.log(`result of "${inputExpr}" is: ${result}`);}
    else {
        console.log("invalid input");
    }
    //event handler
    var counter=10;
    console.log(`counter value is:${counter}`);
    function incrementfun(){
counter++;
console.log(`counter value is:${counter}`);
    }

    function decrementfun(){
        counter--;
        console.log(`counter value is:${counter}`);
            }


//String Parsing and Analysis
function  analyzeParagraph (sentence){
    var total=sentence.length;
    var sentences=0;
    var words=0;
    for (var i=0;i<total;i++){
        if (sentence[i]==' ') words++;
        if (sentence[i]=='.') sentences++;

    }
   var output=sentence.replaceAll("ITI","Google");
    var obj={
        "characterCounnt":total,
        "total words":words+1,
        "totalsentence":sentences+1,
        "finaloutput":output
    }
    return obj;
}
console.log(analyzeParagraph("hello eman at ITI.your are in ITI"));

//ex11
var arr3=[2, 3, 5, 7, 11, 13, 17, 19];
for (var i=0;i<arr3.length;i++){
    arr3[i]*=2;
    
}

for (var i=0;i<arr3.length;i++){
  if(arr3[i]>20){
    arr3.splice(i,1);
    i--;
  }
    
}
arr3.sort((a,b)=>a<b);
console.log(arr3);

//ex12
var profile={
    "firstName":"eman",
    "lastName":"qadry",
    "age":23,
    "gender":"female"
}
profile.hobbies=["reading","programming"];
 function profileformat(profile){
    var output=`${profile.firstName} ${profile.lastName},
    Age:${profile.age},Gender:${profile.gender} ,Hobbies:${profile.hobbies}`
 return output;
}
console.log(profileformat(profile));


//ex13
function add(){
    var input1=+prompt("Enter first number");
    var input2=+prompt("Enter second number");
    var result=input1+input2;
    console.log(result);

}

function subtract(){
    var input1=+prompt("Enter first number");
    var input2=+prompt("Enter second number");
    var result=input1-input2;
    console.log(result);

}

//ex14

function mergeanddublicate(){
    var arra = [1, 2, 3, 4];
    var arrb = [5, 6, 7, 8];
    var arrc=arra.concat(arrb);
    arrc.sort((a,b)=>{
        a>b
    });
    for (var i=1;i<arrc.length;i++){
        if (arrc[i]===arrc[i-1]){
            arrc.splice(i,1);
        }
    }
    var sum=0;
    for (var i=0;i<arrc.length;i++){
        sum+=arrc[i];
    }
    console.log(sum);
}
mergeanddublicate();
//ex15
const inputField = document.getElementById('textinput');
const outputField = document.getElementById('output');
function toupper(){
    update(inputField.value.toUpperCase())
}
function tolower(){
    update(inputField.value.toLowerCase())
}
function update(text){
    outputField.textContent=text;
    console.log(text);
}
function replacespace(){
    const input = inputField.value;
   /* for (var i=0;i<input.length;i++){
        if (input[i]==' ') input[i]='-'
    }*/
    update(input.replace(/\s+/g, '-'));
}
//ex 16
const div1= document.getElementById('vot1');
const div2= document.getElementById('vot2');
const div3= document.getElementById('vot3');
var x=0,y=0,z=0;
function canA(){
x++;
div1.textContent=x.toString();
}
function canB(){
    y++;
    div2.textContent=y.toString();
    }
    function canC(){
        z++;
        console.log(z);
        div3.textContent=z.toString();
        }