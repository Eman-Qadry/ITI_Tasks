/// swap a,b
let a = 5, b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`); 


//222 max and min
function findMinMax(...arr) {
    const maxvalue = Math.max(...arr);
    const minvalue = Math.min(...arr);
    return { maxvalue, minvalue };
  }
  
  const arr = [5, 12, -3, 20, 9];
  const { max, min } = findMinMax(...numbers);
  console.log(`Max: ${max}, Min: ${min}`); // Max: 20, Min: -3
  

  //
  const fruits = ["apple", "strawberry", "banana", "orange", "mango"];


const allFruits = fruits.every(fruit => typeof fruit === 'string');
console.log(allFruits); 


const StartWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log(StartWithA); 


const filteredFruits = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(filteredFruits); 

const likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log(likedFruits); 


likedFruits.forEach(fruit => console.log(fruit));

///444
function PositiveNumbers(numbers) {
    return numbers.filter(num => num > 0);
  }
  
  const numArr = [-10, 15, -3, 8, 0, 7];
  console.log(PositiveNumbers(numArr)); // [15, 8, 7]
  

  //55
  function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  const nums = [10, -5, 3, 7];
  console.log(sumArray(nums)); // 15

  
  //6
  function capitalize(names) {
    return names.map(name => name[0].toUpperCase() + name.slice(1));
  }
  
  const names = ["john", "mike", "sarah"];
  console.log(capitalize(names)); 
  


  //7
  function isLowerCase(str) {
    return str === str.toLowerCase();
  }
  
  console.log(isLowerCase("hello")); 
  console.log(isLowerCase("Hello"));
  

  //8
  const filterStrings = (strings, len) => 
    strings.filter(str => str.length > len);
  
  const stringArray = ["cat", "elephant", "dog", "tiger"];
  console.log(filterStrings(stringArray, 3)); 