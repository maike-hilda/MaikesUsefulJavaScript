## IIFE
Immediately Invoked Function Expression

Can wrap the entire JS document inside an IIFE ```(function() { // all the code })();``` which gives the file it's own private scope

### buttons
http://jsbin.com

```javascript
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
 
createButtons();
```
This will result in 5 buttons labeled button 1 through button 5. When the buttons are pressed, they will all say "This is button 6." (due to function scoping)

We can fix this but putting the onclick event inside an IIFE (encapsulation)
```javascript
(function(num){
    button.onclick = function() {
        alert('This is button ' + num);
    }
})(i);    
```
Or else
```javascript
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     clickStuff(button, i);
     body.appendChild(button);
   }
}
 
createButtons();

function clickStuff(button, num) {
    button.onclick = function() {
        alert('This is button ' + num);
    }
}
```
But there is a new way of fixing this in ES6
```javascript
const x = i; // or let x = i;
button.onclick = function() {
    alert('This is button ' + x);
}
```
Let and const variables are block scoped and the onclick event is inside the block of the for loop and thus, block scoping results in the same outcome as the creating a new function scope by using an IIFE.

## Closure
```javascript
function outer(x) {
    function inner(y) {
        return [x, y];
    }
    return inner;
}
```
Has access to variables in its own scope, the scope of the outer function, global scope.
Has accesss to its own and the outer function(s) parameters

Protects variables from the global scope.

## Currying
see tripeAdd.js

## this keyword
refers to whatever object it is directly inside of

e.g. in the browser, 'this' refers to the global window object

```javascript
var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this; // references myCar Object
        console.log("In logColor - this.color: " + this.color); // blue
        console.log("In logColor - self.color: " + self.color); // blue
        (function() {
            console.log("In IIFE - this.color: " + this.color); // undefined
            // because we are inside the scope of a new function, it is now referencing // the global object
            console.log("In IIFE - self.color: " + self.color); // blue
        })();
    }
};
 
myCar.logColor();
```

## == and ===
abstract equality (does not test for data type --> coercion) vs. strict equality (does test for data type)

* string == num --> string is coerced to number
* boolean vs non-boolean --> non-boolean is coerced to boolean
* object vs primitive data type --> object converted to primitive data type

## "use strict"
* enforce stricter parsing and error handling
* prevents use of global variables i.e. defining variables with var/let/const
* function myFunc(a, a, b) { } // would get error
* delte Object.prototype i.e. we'd not delete something that's native to JS but we also wouldn't get an error

##
```javascript
(function() {
  var x = y = 200;
})();
 
console.log('y: ', y); // y: 200
console.log('x: ', x); // x is not defined
```
x is not defined because it is part of the function scope

y is part of the global scope since what is actually happening is:
```javascript
(function() {
    y = 200;
    var x = y;
})();
```

## call() and apply() methods
native JS method on the Function prototype object; alternative way to call function

```Function.apply(valueForThis, arrOfArgs);``` and 
```Function.call(valueForThis, arg1, arg2, ...);``` (Note: A as array and C as comma)

```javascript
function title(name, profession) {
    console.log(`My name is ${name} and I am a ${profession}`);
}

title.apply(null, ["Murph", "bunny"]); // can do null or undefined
title.call(null, "Murph", "bunny");
title.call(null, ...["Murph", "bunny"]); // spread operator ES6
```

Changing the 'this' context
```javascript
// this code is from "javascript-interview-prep" on udemy
const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};
 
const car2 = {
  brand: 'Lamborghini'
};
 
const car3 = {
  brand: 'Ford'
};
 
car1.getCarDescription(80000, 2010, 'blue');
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);
```

## Passing data by reference
Objects (that includes arrays since they are objects) are passed by reference in JS

Pass by value
primitive data types (string, num) we always pass by value
```javascript
const my Num = 10;
const myString = "hello World";
const myString2 = myString; // set equla to "hello World"
```
Pass by reference: 
```javascript
// list1 and list2 point to the same piece of data
const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
 
list1.push(6, 7, 8);
 
console.log(list2); // [1, 2, 3, 4, 5, 6, 7, 8]

list1 = [10, 20, 30]; // does not affect list2 (it is still referencing the old list)
// list2 still points to the object [1, 2, 3, 4, 5, 7, 8]
// list1 = [10, 20, 30] does not change the object that list 2 is pointing to
```

The ES6 way to create a new reference point:
```javascript
// list1 and list2 point to the same piece of data
const list1 = [1, 2, 3, 4, 5];
const list2 = [...list1];
 
list1.push(6, 7, 8);

console.log(list1); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(list2); // [1, 2, 3, 4, 5]
```
Other options: 
* ```const list2 = list1.slice();```
* ```const list2 = list1.concat([]);```
* ```const list2 = [];``` and then use a for loop to push every element from list1
* ```const list2 = Array.from(list1);```

## JSON Object
Javascript Object Notation - lightweight format for transferring data

Single quotes are not allowed in JSON, all property names have to be in quotes
```javascript
// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.
 
const jsonObj = {
    "myString": "abc",
    "myNumber": 123,
    "myNull": null,
    "myBoolean": false,
    // myUndefined: [undefined], // just omit the property instead, calling it will give return undefined if it doesn't exist
    "myArray": [1, 2, 3],
    // myFunction: [some function], // json is not a programming langauge, therefore, no logic
    "myObject": { 
        "str": "abc",
        "num": 123
    }
    // myData: [a data]
};
```

## setTimeout
```javascript
function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}
 
logNumbers();
```
event loop queue: even though it has 0 timeout, it is put in the queue

## createAnObject
```javascript
// object literal syntax
const obj1 = { alpha: "abc" };

const obj2 = {};
obj2.alpha = "abc";

// new keyword + Object constructor
const obj3 = new Object();
obj3.alpha = "abc";

// constructor function
function ObjFour(alpha) {
  this.alpha = alpha;
}

obj4 = new ObjFour("abc");
```

## typeof
```javascript
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
```

To test if something is an array ```Array.isArray([]));``` or ```[] instanceof Array```

## bind() Method
creates a new function that when called has its this keyword set to the provided value and arguments to anything else specificed ```bind(whatEverThisWillBe, arg1, arg2, ...)```

```javascript
this.distance = 10000;
const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};
 
const roadTrip2 = {
  distance: 5000
};
 
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');
 
getTripDistance(' in total');
```

## Object comparison
Two different objects are never equal --> we assign objects by refrence not value and these two objects point to two different places in memory
```javascript
const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};

// but, this is a fix
const user3 = user1;

console.log(user1 == user2); // false
console.log(user1 === user2); // false
console.log(user1 == user3); // true
console.log(user1 === user3); // true
// JSON.stringify it i.e. compare two strings (primitive types)
console.log(JSON.stringify(user1) == JSON.stringify(user2)); // true
console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true
```

## Array Constructor
```javascript
var arr1 = []; // []
var arr2 = new Array(50); // [undefined, ..., undefined] (50 times) or [<50 empty items>]
// the only way to get this is to pass in a single argument that is an integer starting // from zero 
var arr3 = new Array(1, 2, "three", 4, "five"); // [1, 2, "three", "4", "five"]
var arr4 = new Array([1, 2, 3, 4, 5]); // [[1, 2, 3, 4, 5]]
```
## indexOf()
```javascript
console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));
// -1 --> since objects are passed by reference
console.log('hello world'.indexOf('o')); // 4
console.log([[1], [2], [3], [4]].indexOf([2])); 
// -1 --> since objects are passed by reference
```

## Equivalent Numbers
```console.log(900.9 === 300.3 * 3); // false``` in JS are IEEE 754 floating point numbers (binary encoded) --> 300.3 * 3 = 900.9000000000001
```javascript
console.log(Number((300.3 * 3).toFixed(2)));
console.log(Number((300.3 * 3).toPrecision(12)));
console.log(((300.3 * 10) * 3) / 10);
```

## Objects and Strings
```javascript
var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';
 
console.log(string2); // "Tampa" bc it's a string, but same goes for array
 
var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle';
 
console.log(person1); // is now Kyle since person1 and person2 ref same object
```

## Array methods on strings 
only use "read-only" methods on strings: filter, forEach, map, some, every, etc.

cannot use: push, pop, splice, shift, reverse, etc.
```javascript
const data1 = 'Jordan Smith';
 
// same as Array.prototype.filter
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});

// [] becomes data1 by using call
// filter means we filter everything that passes the condition
// filter returns either true or false
 
console.log(data2); // ["S", "m", "i", "t", "h"]
```

## Object as a property of an object
```javascript
// note that properties can only be strings --> converts it to a string, see below
// same goes for arrays
const a = {}; // empty object
const b = { name: 'b' };
const c = { name: 'c' };

console.log(b);
 
a[b] = 200; // a = {[object Object]: 200}
console.log(a);
a[c] = 400; // a = {[object Object]: 400}
console.log(a);
 
console.log(a[b]); // 400
console.log(a["[object Object]"]); // 400

const d = [1, 2, 3];
a[d] = 300; // a = {[object Object]: 400, 1,2,3: 300}
```

## more hoisting
```javascript
"use strict" // this code actually has no error with use strict

var x = 10;
 
function y() {
    x = 100;
    return;
    function x() {} // never runs since after return statement
  // BUT: x function was hoisted to the topof the scope 
  // i.e. x was defined locally
}
 
y();
 
console.log(x); // 10
```