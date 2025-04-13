let obj = {
  a: 1,
  b: "Nahid",
};

console.log(obj);

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.protoType = animal; // it adds one or more properties to another object.

console.log(animal);
console.log(rabbit);

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }

  eats() {
    console.log("I am eating");
  }
  jumps() {
    console.log("I am jumping");
  }
}

class lion extends Animal {
  // extends method collect all the properties from Animal to lion and still lion is fresh method
  constructor(name) {
    super(name) // for calling animal constructor for using this.
    this.name = name;
    console.log("Object is created... and it is lion");
  }

  eats() {
    super.eats()     // it will run both (from this class and from super class)
    console.log("lion eats meat");
    // its called method overriding.
  }
}

let a = new Animal("Fox");
console.log(a);

let l = new lion("Bagheera");
console.log(l);
