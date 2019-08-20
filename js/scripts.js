// var firstName = 'Migalito';
// var age = 45;

// const birthday = '12/24/1974';

// console.log(birthday);


// Date

// const firstName = 'Michael';
// firstName = 'Michael';

// console.log('My name is: ' + firstName + ' and I am this many years old: ' + age);
//better way
// console.log(`My name is ${firstName} and im this many ${age} years old...`);

// alert (`Hello, my name is ${firstName} and I am ${age} years old.`);

// const birthday1 = '12/24/1974';
// let fixDate = new Date(birthday1);
// console.log(fixDate);

// let hello = new String('Hello there');
// alert (hello);
// console.log(typeof(hello));

// const firstName = 'Michael';
// if(firstName.length > 2) {
//     console.log('You are SAFE');
// }
// console.log(firstName.length);

// const areYouMarried = false;

// const question = confirm('Are You Married');
// if(question === areYouMarried) {
//     console.log('Nah You aint, to bad!');
// } 
// else {
//     console.log('Aight den');
// }

// const topThreeMovies = ['Braveheart', 'Apocolypse Now', 'Platoon'];
// console.log(`My three top movies are: ${topThreeMovies}`);

// console.log (`My second favorite movie is: ${topThreeMovies[1]}`);

let firstName = prompt ('What is your first name?:');
console.log (firstName);

let lastName = prompt ('What is your last name?:');
console.log (lastName);
alert ("Your last name is: " + lastName);

let birthday = prompt ('What is your birthday? DD/MM/YYYY :');

alert (`Your birthday is: ${birthday}`);
let fixDate = new Date(birthday);
console.log (fixDate);


alert (`So let me get this straight... your full name is ${firstName} ${lastName} and your trying to tell me your birthday is ${birthday}`);
