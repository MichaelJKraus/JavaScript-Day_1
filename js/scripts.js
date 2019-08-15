// var firstName = 'Migalito';
var age = 45;

const birthday = '12/24/1974';

console.log(birthday);


Date

const firstName = 'Michael';
// firstName = 'Michael';

console.log('My name is: ' + firstName + ' and I am this many years old: ' + age);
//better way
console.log(`My name is ${firstName} and im this many ${age} years old...`);

alert (`Hello, my name is ${firstName} and I am ${age} years old.`);

const birthday1 = '12/24/1974';
let fixDate = new Date(birthday1);
console.log(fixDate);

let hello = new String('Hello there');
alert (hello);
