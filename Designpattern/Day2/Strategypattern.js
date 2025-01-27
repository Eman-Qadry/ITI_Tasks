
class AttackStrategy {
    executePlan() {
      console.log("Executing Attack Strategy!");
    }
  }
  
  class DefenseStrategy {
    executePlan() {
      console.log("Executing Defense Strategy");
    }
  }
  
  class MediumStrategy {
    executePlan() {
      console.log("Executing Medium Strategy");
    }
  }
  
 
  class GamePlan {
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    executeCurrentPlan() {
      if (this.strategy) {
        this.strategy.executePlan();
      } else {
        console.log("No strategy set!");
      }
    }
  }
  

  const gamePlan = new GamePlan();
  
  gamePlan.setStrategy(new AttackStrategy());
  gamePlan.executeCurrentPlan();
  
  gamePlan.setStrategy(new DefenseStrategy());
  gamePlan.executeCurrentPlan();
  
  gamePlan.setStrategy(new MediumStrategy());
  gamePlan.executeCurrentPlan();
  