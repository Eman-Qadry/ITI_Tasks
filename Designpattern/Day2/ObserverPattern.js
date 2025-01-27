
class Store {
    constructor() {
      this.customers = []; 
    }
  
    addcustomer(customer) {
      this.customers.push(customer);
    }
  
    removecustomer(customer) {

      this.customers = this.customers.filter((cust) => cust !== customer);
    }
  
    notifycustomers(productName) {
      this.customers.forEach((customer) => customer.update(productName));
    }
  
    addProduct(productName) {
      console.log(`Store: New product added - ${productName}`);
      this.notifycustomers(productName);
    }
  }
  
  
  class Customer {
    constructor(name) {
      this.name = name;
    }
  
    update(productName) {
      console.log(`${this.name} is notified: ${productName} is now available!`);
    }
  }
  

  const store = new Store();
  
  const customer1 = new Customer("eman");
  const customer2 = new Customer("doaa");
  
  store.addcustomer(customer1);
  store.addcustomer(customer2);
  
  store.addProduct("Laptop");
  store.addProduct("Smartphone");
  