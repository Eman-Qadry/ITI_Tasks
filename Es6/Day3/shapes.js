
class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        throw new Error("Method not implemented");
    }

    parameter() {
        throw new Error("Method not implemented");
    }

    toString() {
        return `${this.name} -> Area: ${this.area()}, parameter: ${this.parameter()}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    parameter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }

    area() {
        return this.side ** 2;
    }

    parameter() {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    parameter() {
        return 2 * Math.PI * this.radius;
    }
}


export { Rectangle, Square, Circle };
