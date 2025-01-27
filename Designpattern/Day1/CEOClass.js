class CEO {
    constructor(name, age, address) {
      if (CEO.instance) {
        return CEO.instance; // Return the existing instance
      }
      this.name = name;
      this.age = age;
      this.address = address;
      CEO.instance = this; // Store the instance
    }
  
    getDetails() {
      return `CEO Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
  }
  
  // Test Singleton
  const ceo1 = new CEO("Eman", 23, "dairout");
  console.log(ceo1.getDetails()); 
  
  const ceo2 = new CEO("wafaa", 30, "assuit ");
  console.log(ceo2.getDetails()); 
  console.log(ceo1 === ceo2); // true 
  