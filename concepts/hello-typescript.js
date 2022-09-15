var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var circle = function (diameter) {
    return diameter * Math.PI;
};
var names;
names = ["naga", "rithish", "teja"];
names.push("jiraiya");
// names.push(5);
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push("naga");
var mixed = ["naga", 2, "teja", 66, "rithish", 79];
mixed.push("Ichigo kurosaki");
mixed.push(99);
// mixed.push([5, "hello"]);
//objects
var ninja = {
    name: "naga",
    belt: "black",
    age: 21
};
ninja.name = "Rithish";
// ninja.age = "23";
var ninjaTwo;
ninjaTwo = { name: "Teja", age: 55, beltColor: "orange" };
// ninjaTwo = {
//   name: "Teja",
//   age: 55,
//   beltColor: "orange",
//   skills: ["uppercut", "smash"],
// };
var add = function (a, b, c) {
    //   console.log(a + b);
    //   console.log(c);
};
add(5, 10, 4);
add(5, 10, "4");
add(5, 4);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// console.log(result);
//classes
var Invoice = /** @class */ (function () {
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
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.setter = function (value) {
        this.details = value;
    };
    Invoice.prototype.format = function () {
        // this.client = "Naga"; //error
        this.details = "Cricket grounds";
        return "".concat(this.client, " owes ").concat(this.amount, " Rupees for ").concat(this.details);
    };
    return Invoice;
}());
var rithishInvoice = new Invoice("Rithish", "Hiring a cab to MREC", 950);
var saiInvoice = new Invoice("Sai Chander", "Snacks for Office", 1005);
// saiInvoice.details = "Cricket ground"; //error
// console.log(saiInvoice.details); //error
// console.log(rithishInvoice.format());
var invoices = [];
invoices.push(rithishInvoice);
invoices.push(saiInvoice);
var me = {
    name: "naga",
    age: 21,
    speak: function (text) {
        console.log("I spoke ".concat(text));
    },
    spend: function (amount) {
        console.log("I spent ".concat(amount, " Rupees"));
        return amount;
    }
};
// GENERICS
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "naga", age: 22 });
var docThree = {
    uid: 1,
    resourceName: "person",
    data: {
        name: "naga",
        age: 21
    }
};
var docFive = {
    uid: "2",
    resourceName: "animal",
    data: {
        name: "tiger"
    }
};
// const docFour: Resource<Details> = {
//   uid: 1,
//   resourceName: "person",
//   data: {
//     name: "rithish",
//   },
// }; //error at data
//console.log(docThree.data.name); //error because data is of type object in the interface and it is not specified that the object has "name property"
