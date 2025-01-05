// 1.	Use JS constructor function to create the following custom types:
// a.	Create custom type “Person” that has Name and age properties.
function person(name,age){
    this.name=name;
    this.age=age;
}
// b.	Use prototype property to add PrintPerson() method to the class.
person.prototype.printPerson=function (){
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}
// c.	Create student object that inherits from Person, and its constructor have two member variables 
// (Faculty and Total_mark), and put default value for Total_mark to be 0 (Using Function Constructor).
Student.prototype =new person();
function Student(name,age,Faculty ,Total_mark=0){
  this.name=name;
  this.age=age;
    this.Faculty=Faculty;
    this.Total_mark=Total_mark;
}
var student=new Student()
// d.	Use prototype property to add PrintStudent() method to the class.
Student.prototype.PrintStudent=function(){
    console.log(`this is a students named ${this.name}  with age ${this.age}`);
}
// e.	In previous class Create private variable named (min_degree) which value is 60, 
// and create local (inner) function named (checkSuccess) that return “Succeed” if student degree is more than min_degree,
//  else it returns “Fail”. 

// f.	Make another member function (public) named (checkResult) that alert the result of that student.
// g.	Make an Object of student and set it members, and test it with different values.
//  (Try to access min_degree variable, and checkSuccess function outside class, what did you remark?).
function studentCopy(name,age,Faculty,Total_mark){
    var min_degree=60;
    person.call(this,name,age)
    this.Faculty=Faculty;
    this.Total_mark=Total_mark;
    this.checkResult=function(){
        alert(`student result equal ${this.Total_mark}`)
    }
    function checkSuccess(){
        if (this.Total_mark>min_degree)
            return "Succeed"
        else 
          return "Fail"
    }
}

var studentOne=new studentCopy("eman",23,"fci",70);
console.log(studentOne.Total_mark);
studentOne.checkResult();

// h.	What’s the difference between adding property using prototype, and adding it to specific class object?
// using prototype it can be set in the structure of the parents and it's created objects


////////////////////////////////////////////////////////
// 2.	Create 2 Course objects (Using literal method) crs1, crs2 that has courseName, 
// courseMaxDegree properties, and printCourse() method that print the course in this format
//  "Max. Degree of JS Course is 100". 
// a.	Add new property courseHours to crs1=30, and try to alert it from crs1 and crs2.  
var course=function (courseName,courseMaxDegree){
    return {
    courseName:courseName,
    courseMaxDegree:courseMaxDegree,
    printCourse:function(){
      console.log(`Max. Degree of ${courseName} Course is ${courseMaxDegree}`);
    }
}
};
var crs1=course("js",100);
var crs2=course("Html",70);
crs1.courseHours=16;
alert(`courseHours for csr1 are ${crs1.courseHours}`);
alert(`courseHours for csr2 are ${crs2.courseHours}`);
////////////////////////////////////////////////////////
// 3.	Using ES6 new OOP syntax:
// a.	Implement Rectangle custom type:
// a.	Constructor that width and height.
// b.	CalcCircumference() function that returns  the circumference of the rectangle.
// c.	WhoAmI() Static function that prints text (“I am rectangle”).
// b.	Implement Square custom type, that inherits from rectangle, and change the following:
// a.	Make the constructor of square takes one parameter only.
// b.	In the square constructor, make width and height of the parent equal.
// i.	You’ll need to call the super() constructor in the square constructor to access the parent object properties.
// c.	Override circumference () to return circumference of the Square.
// d.	Override WhoAmI() function to print text (“I am square”).
// c.	Create objects from rectangle and square and test them, and make sure the square inherited rectangle members.

// Step a: Implement Rectangle custom type
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
   
    calcCircumference() {
      return 2 * (this.width + this.height);
    }
  
    static whoAmI() {
      console.log("I am rectangle");
    }
  }
  
  // Step b: Implement Square custom type that inherits from Rectangle
  class Square extends Rectangle {
    constructor(side) {
    
      super(side, side);
    }
  
    
    calcCircumference() {
      return 4 * this.width;
    }
  
    
    static whoAmI() {
      console.log("I am square");
    }
  }
  
  // Step c: Create objects and test
  const rect = new Rectangle(10, 5);
  console.log("Rectangle Circumference:", rect.calcCircumference()); // 30
  Rectangle.whoAmI(); 
  
  const square = new Square(4);
  console.log("Square Circumference:", square.calcCircumference()); // 16
  Square.whoAmI(); 
  
  
  console.log("Square Width:", square.width); 
  console.log("Square Height:", square.height); 
  