
  
  // Car class
  class Car {
    getDescription() {
      return "This is a car with four wheels.";
    }
  
    getType() {
      return "Car";
    }
  }
  
  // Bike class
  class Bike  {
    getDescription() {
      return "This is a bike with two wheels.";
    }
  
    getType() {
      return "Bike";
    }
  }
  
  // Truck class
  class Truck  {
    getDescription() {
      return "This is a truck designed for heavy cargo.";
    }
  
    getType() {
      return "Truck";
    }
  }
  
  // VehicleFactory class
  class VehicleFactory {
    static createVehicle(vehicleType) {
      switch (vehicleType) {
        case "Car":
          return new Car();
        case "Bike":
          return new Bike();
        case "Truck":
          return new Truck();
        default:
          throw new Error("Unknown vehicle type");
      }
    }
  }
  
  // Test the VehicleFactory
  const car = VehicleFactory.createVehicle("Car");
  console.log(car.getDescription()); 
  console.log(car.getType()); // Car
  
  const bike = VehicleFactory.createVehicle("Bike");
  console.log(bike.getDescription()); 
  console.log(bike.getType()); // Bike
  
  const truck = VehicleFactory.createVehicle("Truck");
  console.log(truck.getDescription()); 
  console.log(truck.getType()); // Truck
  