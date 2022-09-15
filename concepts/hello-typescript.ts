const circle = (diameter: number) => {
  return diameter * Math.PI;
};

let names: String[];

names = ["naga", "rithish", "teja"];
names.push("jiraiya");
// names.push(5);

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push("naga");

let mixed = ["naga", 2, "teja", 66, "rithish", 79];

mixed.push("Ichigo kurosaki");
mixed.push(99);
// mixed.push([5, "hello"]);

//objects
let ninja = {
  name: "naga",
  belt: "black",
  age: 21,
};

ninja.name = "Rithish";
// ninja.age = "23";

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "Teja", age: 55, beltColor: "orange" };
// ninjaTwo = {
//   name: "Teja",
//   age: 55,
//   beltColor: "orange",
//   skills: ["uppercut", "smash"],
// };

const add = (a: number, b: number, c?: number | string) => {
  //   console.log(a + b);
  //   console.log(c);
};

add(5, 10, 4);
add(5, 10, "4");
add(5, 4);

const minus = (a: number, b: number): number => {
  return a + b;
};
const result = minus(10, 7);
// console.log(result);

//classes

class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  //public => read and change variable inside and outside the class
  //private => read and change variable only inside the class
  //readonly => only read the variable inside and outside the class

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  public setter(value: string) {
    this.details = value;
  }

  format() {
    // this.client = "Naga"; //error
    this.details = "Cricket grounds";
    return `${this.client} owes ${this.amount} Rupees for ${this.details}`;
  }
}

const rithishInvoice = new Invoice("Rithish", "Hiring a cab to MREC", 950);
const saiInvoice = new Invoice("Sai Chander", "Snacks for Office", 1005);
// saiInvoice.details = "Cricket ground"; //error
// console.log(saiInvoice.details); //error

// console.log(rithishInvoice.format());

let invoices: Invoice[] = [];
invoices.push(rithishInvoice);
invoices.push(saiInvoice);
// console.log(invoices);

//INTERFACES
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "naga",
  age: 21,
  speak: (text: string): void => {
    console.log(`I spoke ${text}`);
  },
  spend: (amount: number): number => {
    console.log(`I spent ${amount} Rupees`);
    return amount;
  },
};

// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "naga", age: 22 });
// let docTwo = addUID("hello"); //error at hello
// let docTwo = addUID({ name: 50, age: 22 }); // error at name
// console.log(docOne.name); //error if not used generics

// interface Resource {
//   uid: number;
//   resourceName: string;
//   data: object;
// }
interface Resource<X, Y, Z> {
  uid: X;
  resourceName: Y;
  data: Z;
}

interface Details {
  name: string;
  age: number;
}

const docThree: Resource<number, string, Details> = {
  uid: 1,
  resourceName: "person",
  data: {
    name: "naga",
    age: 21,
  },
};

const docFive: Resource<string, string, { name: string }> = {
  uid: "2",
  resourceName: "animal",
  data: {
    name: "tiger",
  },
};
// const docFour: Resource<Details> = {
//   uid: 1,
//   resourceName: "person",
//   data: {
//     name: "rithish",
//   },
// }; //error at data
//console.log(docThree.data.name); //error because data is of type object in the interface and it is not specified that the object has "name property"
