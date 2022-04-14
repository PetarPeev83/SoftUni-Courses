function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        get area() { };
        
        changeUnits = function (unit) {
            this.units = unit;
        }
        toString = function () {
            return `Figures units: ${this.units}`;
        }
    };
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area() {
            if (this.units == 'mm') {
                return Math.PI * (this.radius * 10) * (this.radius * 10);
            } else if (this.units == 'm') {
                return Math.PI * (this.radius / 100) * (this.radius / 100);
            } else {
                return Math.PI * this.radius * this.radius;
            };
        };
        toString = function () {
            let result = '';
            if (this.units == 'mm') {
                result = `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * 10}`
            } else if (this.units == 'm') {
                result = `Figures units: ${this.units} Area: ${this.area / 100} - radius: ${this.radius / 100}`
            } else {
                result = `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
            }
            return result;
        };
    };
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }
        get area() {
            if (this.units == 'mm') {
                return (this.width * 10) * (this.height * 10);
            } else if (this.units == 'm') {
                return (this.width / 100) * (this.height / 100);
            } else {
                return this.width * this.height;
            }
        }
        toString = function () {
            let result = '';
            if (this.units == 'mm') {
                result = `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * 10}, height: ${this.height * 10}`
            } else if (this.units == 'm') {
                result = `Figures units: ${this.units} Area: ${this.area / 100} - width: ${this.width / 100}, height: ${this.height / 100}`
            } else {
                result = `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
            }
            return result;
        }
    }
    return {
        Figure,
        Circle,
        Rectangle,
    }
};


// ot judge ↓↓↓↓↓↓

let classes = classHierarchy();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
// assert.equal(c.area,78.53981633974483, "1");
// assert.equal(c.toString(),"Figures units: cm Area: 78.53981633974483 - radius: 5","2"); 
let r = new Rectangle(3, 4, 'mm');
console.log(r.area);
console.log(r.toString());
// assert.equal(r.area,1200,"3");
// assert.equal(r.toString(),"Figures units: mm Area: 1200 - width: 30, height: 40", "4");
r.changeUnits('cm');
// assert.equal(r.area,12,"5");
// assert.equal(r.toString(),"Figures units: cm Area: 12 - width: 3, height: 4","5");

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50