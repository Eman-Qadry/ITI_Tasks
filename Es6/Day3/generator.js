
function* fibonacciCount(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        /* a=b b(next)=a+b*/
        [a, b] = [b, a + b];
    }
}


const fib1 = fibonacciCount(10);
console.log([...fib1]); 



function* fibonacciMax(maxValue) {
    let a = 0, b = 1;
    while (a <= maxValue) {
        yield a;
        [a, b] = [b, a + b];
    }
}


const fib2 = fibonacciMax(50);
console.log([...fib2]); 


let arr = ["mona", "ali", 20, "hello"];

arr[Symbol.iterator] = function* () {
  let count = 0;
  while (count < this.length) {
    yield this[count++];
  }
};

for (let item of arr) {
    console.log(item);
}