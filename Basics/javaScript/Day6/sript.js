function validateNumber(number) {
  
    const rgex = /^01[0125]\d{8}$/;

 
    return rgex.test(number);
}

const phone=prompt('Enter a valid phone number!');
 if (validateNumber(phone)){
    console.log("valid phone number")
 }
 else 
 console.log("Invalid phone number");



 //ex2
 function validateName(name) {
  
    const rgex = /^[a-z A-Z _ 0-9]{4,16}$/;

 
    return rgex.test(name);
}

const name=prompt('Enter a valid name contain anly char, number or underscore!');
 if (validateName(name)){
    console.log("valid name")
 }
 else 
 console.log("Invalid name");
  
 //ex3

 var arr=["HTML","CSS","JavaScript","Angular","typescript","mongodb"];
 var index=Math.floor(Math.random()*5);
 console.log(arr[index]);