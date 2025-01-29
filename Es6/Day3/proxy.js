
class Person{
    constructor(name,address,age){
        this.name=name;
        this.address=address;
        this.age=age
    }
}

const handler = {
    set(target, property, value) {

        if (property === 'name') {
            if (typeof value !== 'string' || value.length !== 7) {
                throw new TypeError('Name must be a string of 7 characters.');
            }
        } else if (property === 'address') {
            if (typeof value !== 'string') {
                throw new TypeError('Address must be a string.');
            }
        } else if (property === 'age') {
            if (typeof value !== 'number' || value < 25 || value > 60) {
                throw new TypeError('Age must be a number between 25 and 60.');
            }
        } else {
            throw new Error(`Property "${property}" is not allowed.`);
        }

      
        target[property] = value;
        return true; 
    },

    get(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new Error(`Property "${property}" does not exist.`);
        }
    }
};

const person= new Person("JohnDoe","123 Main St",30);
const myproxy = new Proxy(person, handler);


try {
   
    console.log(person.name); // Output: JohnDoe
    console.log(person.address); // Output: 123 Main St
    console.log(person.age); // Output: 30

    
    myproxy.name = 'John'; 
    //  myproxy.age = 20; 
    //  myproxy.unknownProperty = 'value'; 
} catch (error) {
    console.error(error.message);
}