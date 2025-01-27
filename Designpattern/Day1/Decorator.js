// Base Component
class Coffee {
    cost() {
      return 5;
    }
  
    description() {
      return "Plain coffee";
    }
  }
  
  // Base Decorator
  class CoffeeDecorator {
    constructor(coffee) {
      this._coffee = coffee;
    }
  
    cost() {
      return this._coffee.cost();
    }
  
    description() {
      return this._coffee.description();
    }
  }
  
  // Milk Decorator
  class MilkDecorator extends CoffeeDecorator {
    cost() {
      return super.cost() + 2;
    }
  
    description() {
      return super.description() + ", Milk";
    }
  }
  
  // Sugar Decorator
  class SugarDecorator extends CoffeeDecorator {
    cost() {
      return super.cost() + 1;
    }
  
    description() {
      return super.description() + ", Sugar";
    }
  }
  
  // Whipped Cream Decorator
  class WhippedCreamDecorator extends CoffeeDecorator {
    cost() {
      return super.cost() + 3;
    }
  
    description() {
      return super.description() + ", Whipped Cream";
    }
  }
  
  // Test the Decorator
  let coffee = new Coffee();
  console.log(coffee.description(), "| Cost:", coffee.cost()); 
  
  coffee = new MilkDecorator(coffee);
  console.log(coffee.description(), "| Cost:", coffee.cost()); 
  
  coffee = new SugarDecorator(coffee);
  console.log(coffee.description(), "| Cost:", coffee.cost()); 
  
  coffee = new WhippedCreamDecorator(coffee);
  console.log(coffee.description(), "| Cost:", coffee.cost()); 
  