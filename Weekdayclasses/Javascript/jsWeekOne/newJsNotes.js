// friday notes
// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruity = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("showArray").innerHTML = fruity;
// document.getElementById("h1").innerHTML = fruity.toString();
console.log(typeof fruity, fruity);
const stringFruit = fruity.toString();
console.log(stringFruit);
console.log(typeof stringFruit);


// difference between arrays and objects

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

const newArray = ['firstIndex', 'secondIndex', 'thirdIndex']
 let numberAccess = newArray[1];
 console.log(numberAccess);

//  Objects use names to access its "members". In this example, person.firstName returns John:

const randomPerson = { firstName: "John", lastName: "Doe", age: 46 };
let personAccess = randomPerson.firstName;
console.log(personAccess);


// Accessing the First Array Element

const anotherArray = ["firstIndex", "secondIndex", "thirdIndex"];
let firstArray = anotherArray[0];
console.log(firstArray);

// Accessing the Last Array Element

let lastArray = anotherArray[anotherArray.length -1];
console.log(lastArray);

// Looping Array Elements
// One way to loop through an array, is using a for loop:

const someFruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = someFruits.length;

let someFruitsText = "<ul>";
for (let i = 0; i < fLen; i++) {
  someFruitsText += "<li>" + someFruits[i] + "</li>";
}
someFruitsText += "</ul>";

console.log(someFruitsText);

// Useful Javascript array methods

// pop and push
// shift and unshift
// index of
// concat
// spread operators


// array length:- we treated that before using the .length

// Array toString():- we treated it converting array to string

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// Popping items out of an array, or pushing items into an array.

// JavaScript Array pop()
// The pop() method removes the last element from an array:

const newFruits = ["Banana", "Orange", "Apple", "Mango"];
let poppedOutFruit = newFruits.pop();
console.log(poppedOutFruit);
 poppedOutFruit = newFruits.pop();
console.log(poppedOutFruit);
console.log(newFruits);

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):

const thisfruits = ["Banana", "Orange", "Apple", "Mango"];
let pushedInFruits = thisfruits.push("Kiwi");
pushedInFruits = thisfruits.push('Pineapple')
console.log(thisfruits);

// shift and unshift

// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruitees = ["Banana", "Orange", "Apple", "Mango"];
fruitees.shift();
console.log(fruitees);
fruitees.shift();
console.log(fruitees);

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const fruited = ["Banana", "Orange", "Apple", "Mango"];
fruited.unshift("Lemon");
console.log(fruited);
fruited.unshift("PineApple");
console.log(fruited);

// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myNewChildren = arr1.concat(arr2, arr3);
console.log(myNewChildren);

// The concat() method can also take strings as arguments: but it adds it just like your push, to the end of the array

const arry1 = ["Emil", "Tobias", "Linus"];
let myArry1Children = arry1.concat("Peter",'daniel');
console.log(myArry1Children);
 myArry1Children = arry1.concat("james");
console.log(myArry1Children);

// The Spread Operator
// The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// This allows us to quickly copy all or parts of an existing array into another array:

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);

// The spread operator is often used to extract only what's needed from an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(numbers);

// We can use the spread operator with objects too:

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "blue",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "Black",
};
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now Black.








// ------------------------------------------------------------

// javascript string methods
// the length method

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let textLength = text.length;
console.log(textLength);

// JavaScript String slice()

let fruitText = "Apple, Banana, Kiwi";
let part = fruitText.slice(7, 13);
console.log(part);
part = fruitText.slice(0);
console.log(part);
part = fruitText.slice(-5);
console.log(part);

// JavaScript String toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

// JavaScript String toLowerCase()
let text3 = text1.toLowerCase();
console.log(text3);

// JavaScript String indexOf
let text4 = "Hello world, welcome to the universe.";
let text4Result = text4.indexOf("world")
console.log(text4Result);

// ---JavaScript String concat()
// javascript concatenation is joining two strings together
// Overview. String Concatenation in JavaScript simply means appending one or more strings to the end of another string.

let textA = "sea";
let textB = "food";
let textResult = textA.concat(textB);
console.log(textResult);
// can also be written like this
textResult = textA.concat(' ', textB);
console.log(textResult);

// Join three strings:

let txt1 = "Hello";
let txt2 = "world!";
let txt3 = "Have a nice day!";
let txtResult = txt1.concat(" ", txt2, " ", txt3);

console.log(txtResult);

// Adding Numbers and Strings
// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.

let x = 10;
let y = 20;
let z = x + y;
console.log(z);

// If you add two strings, the result will be a string concatenation:
let xx = "10";
let yy = "20";
let zz = xx + yy;
console.log(zz);

let nx = 10;
let ny = 20;
let nz = "30";
let result = nx + ny + nz;
console.log(nz);

// Numeric Strings
// JavaScript strings can have numeric content:
let ix = 100;         // x is a number
let iy = "100";       // y is a string

// JavaScript will try to convert strings to numbers in all numeric operations:

let px = "100";
let py = "10";
let pz = px / py;
console.log(pz);
pz = px * py;
console.log(pz);

// ---JavaScript Template Literals
// Back-Tics Syntax
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let pText1 = `Hello World!`;
let pText2 = `He's often called "Johnny"`;

// Multiline Strings
// Template literals allows multiline strings:
let pText3 =
`The quick
brown fox
jumps over
the lazy dog`;
// we can't do this with our normal quotes

// Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.
// ${...}

// Variable Substitutions
// Template literals allow variables in strings:

let firstName0 = "John";
let lastName0 = "Doe";

let text5 = `Welcome ${firstName0}, ${lastName0}!`;
console.log(text5);

// Expression Substitution
// Template literals allow expressions in strings:

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);



// JavaScript Arithmetic/Math Operators
// Arithmetic operators perform arithmetic on numbers (literals or variables).

// Addition +
// Substraction -
// Multiplication *
// Division /
// incremental ++
//  Decremental --
// Exponential **
// modulus(Remainder) %

const aa = 5;
const ab = 8;
// Addition +
let ac = aa + ab;
console.log(ac);
// Substraction -
ac = aa - ab;
console.log(ac);
// Multiplication *
ac = aa * ab;
console.log(ac);
// Division /
ac = ab / aa;
console.log(ac);
// incremental ++
let ad = 8;
ad ++
console.log(ad);
ad --
// ad --
console.log(ad);

// Exponentiation
// The exponentiation operator (**) raises the first operand to the power of the second operand.

let js = 5;
let jy = 3
let jx = js ** 3;
console.log(jx);
// x ** y produces the same result as Math.pow(x,y):

// modulus gives a remainder answer
jx = js % jy;
console.log(jx);



// Comparision Operators
// Greater than >
// Lesser than <
// Equal to ==
// Equal value and equal type ===
// !=	not equal
// !==	not equal value or not equal type
// >=	greater than or equal to
// <=	less than or equal to

const james = 15
const daniel = 20
// Lesser than <
let comResult = james < daniel;
console.log(comResult);

// Greater than >
 comResult = james > daniel;
console.log(comResult);

// Equal to ==
 comResult = james == daniel;
console.log(comResult);

// Equal value and equal type ===
 comResult = james === daniel;
console.log(comResult);

// !=	not equal
 comResult = james != daniel;
console.log(comResult);

// !==	not equal value or not equal type
 comResult = james !== daniel;
console.log(comResult);

// >=	greater than or equal to
comResult = james >= daniel;
console.log(comResult);

// <=	less than or equal to
comResult = james <= daniel;
console.log(comResult);


// Logical operators
// Logical and &&
// Logical or ||
// Logical not !

const rA = 5;
const rB = 9;
const rC = 2;
const rD = 14;

// Logical and &&
let rF = rA < 10 && rB > 7;
console.log(rF);

// Logical or ||
// note if one is correct using the logical or, the boolean will be true
 rF = rA == rB || rA !== rC ;
console.log(rF);

// Logical not !
rF = !(rA == rB);
console.log(rF);


// Conditional Statements
// Very often when you write code, you want to perform different actions for different decisions.
// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
let hour = 18

if (hour < 19) {
    greeting = "Good day";
    console.log(greeting);
}

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.
if (hour > 19) {
  greeting = "Good day";
  console.log(greeting);
}else {
    greeting = 'Good Night'
    console.log(greeting);
}


// The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

if (hour > 19) {
  greeting = "Good day";
  console.log(greeting);
} else if(hour > 20)  {
  greeting = "Good Night";
  console.log(greeting);
}else {
    greeting = "Good Bye"
    console.log(greeting);
}

// Tenary Operators

// JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.
// This is how it works:
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
}

// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

// The default Keyword
// The default keyword specifies the code to run if there is no case match:
// The default case does not have to be the last case in a switch block:
let mx = 1 ;
switch (mx) {
  case 0:
    mxOutput = "Off";
    console.log(mxOutput);
    break;
  case 1:
    mxOutput = "On";
    console.log(mxOutput);
    break;
  default:
    mxOutput = "No value found";
    console.log(mxOutput);
}

// If default is not the last case in the switch block, remember to end the default case with a break.
let thisday = 0;
switch (thisday) {
  default:
    text = "Looking forward to the Weekend";
    console.log(text);
    break;
  case 6:
    text = "Today is Saturday";
    console.log(text);
    break;
  case 0:
    text = "Today is Sunday";
    console.log(text);
}

// Common Code Blocks
// Sometimes you will want different switch cases to use the same code.
// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
let todaysDate = 6;
switch (todaysDate) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    console.log(text);
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    console.log(text);
    break;
  default:
    text = "Looking forward to the Weekend";
    console.log(text);
}

// class work
// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".

switch('Banana') {
 case "Banana":
    msg = 'Hello'
    console.log(msg);
    break;

 case "Apple":
    msg = "Welcome";
    console.log(msg);
    break;
}


// Loops






