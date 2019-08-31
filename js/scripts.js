// const exampleString = 'I am a string';
// const exampleObjectString = new String('1');
// const anotherString = 'I am a string';
const H1 = document.getElementById('greeting');

// console.log (H1);

// function checkExamples() {
    // if(exampleString == exampleObjectString) {
    //     console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosly equal.`);
    // }
//     if(exampleString == anotherString) {
//         console.log(`Yes, ${exampleString} and ${anotherString} are not equal.`);
//     } 
//     else {
//         console.log('Sorry, they do not equal at all');
//     }
// }

// checkExamples();

// const luckyNumber = 13;
// if (luckyNumber < 5 || luckyNumber > 1) {
//     console.log('Sorry, your number is not lucky to me!');
// }
// else {
//     console.log(`Hey your lucky number is ${luckyNumber}`);
// }

// var firstVariable = 10;
// var secondVariable = 25;

// const firstString = new String(`The second variable is ${secondVariable}`);

// console.log (firstString);

// function checkStrings(){
//     if (firstVariable == secondVariable) {
//         console.log(`Yes, ${firstVariable} and ${secondVariable} are the same`);
//     }
//     else {
//         console.log('They are not the same...');
//     }
// }


// MATH EXAMPLES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let a = 5, d= 12;
// let b = 2;

// let x = 10;
// let y = 100;

// let c = a + b;
// let result = a - b;
// let division = y / x;
// let multiply = y * x;


// console.log(`this is the result of A ${a} minus B ${b}: ${result}`);
// console.log(`this is the result of A ${a} plus B ${b}: ${c}`);
// console.log(`This is the result of Y ${y} divided by X ${x}: ${division}`);
// console.log(`This is the result of Y ${y} multiplied by X ${x}: ${multiply}`);


// let g = '5.99';
// let h = '2';
// let transformMe = parseFloat(g, 2);
// let testModulo = 9 % 2;
// let testNan = 
// console.log(`Modulo: ${testModulo}`)
// let result = transformMe += h;
// console.log(`Before: ${g}, after: ${transformMe}`, typeof(g), typeof(transformMe));


// let hello = 'Hello';
// let there = ' there!';
// let sentence = hello + there;
// console.log(sentence);

// let valueNan= 'I am indeed NaN';
// let testNan = isNaN(valueNan);
// testNan ? console.log('This is TRUE') : console.log('This is FALSE');

// if (testNan === true) {
//     let result = 'Yup, this is true';
//     console.log('Yup, this is true');
//     H1.innerHTML = result;
// } else {
//     let result = "Nope, it's not true";
//     console.log("Nope, it's not true")
//     H1.innerHTML = result;
// }

// COLOR AND PRINT TO SCREEN $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const askColor = prompt('Pick a color: Red, Blue, or Orange. Await the following response.....');

// switch(askColor) {
//     case 'Red':
//         H1.innerHTML=`You chose ${askColor}.. which reminds me of the song Lady in Red`;
//         break;
//     case 'Blue':
//         H1.innerHTML=`You chose ${askColor}.. Blue Christmas was sung by Elvis`;
//         break;
//     case 'Orange':
//         H1.innerHTML=`You chose ${askColor}.. I can't think of a song with Orange in it...`;
//         break;
//     default:
//         H1.innerHTML='I said pick a color and listed them, can you not follow simple instructions????';
// }


// NESTED SWITCH STATEMENTS--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// const ageEntered = prompt('Are you over 18?');

// switch (ageEntered) {
//     case 'No':
//         H1.innerHTML=`You are not old enough, please leave now`;
//         break;
//     case 'Yes':
//         H1.innerHTML=`Your are over 18, are you younger than 80?`;
//         const lessThanEighty = prompt('Are you younger than 80?');
//         switch (lessThanEighty) {
//             case 'Yes':
//                 H1.innerHTML=`Do you even Star Wars?`;
//                 const evenStarWars = prompt('Do you even Star Wars?');
//                 switch (evenStarWars) {
//                     case 'Yes':
//                         H1.innerHTML=`The force is strong with this one!`;
//                         alert=('If you only knew the power, of the dark side!');
//                     case 'No':
//                         H1.innerHTML=`How dare you not even Star Wars?`;
//                         break;
//                 }
//                 break;
//             case 'No':
//                 H1.innerHTML="Go eat some prunes!";
//         }
//         break;
//     case (ageEntered > 80):
//         H1.innerHTML=`You are too old, do you like prunes?`;
//         break;
//     default:
//         H1.innerHTML=`You didn't enter an age`;
// }

// IF ELSE IF EXAMPLE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const greeting = 1;

// if(greeting === 'Hi') {
//     console.log('Yes, this matches to Hi.');
// } else if(greeting == "Hello") {
//     console.log('Yes, this matched Hello.');
// } else if (greeting === 1) {
//     console.log(`Yes, this matched the integer ${greeting} `);
// } else {
//     console.log('Nothing matched you NEWB!');
// }

// SWITCH STATEMENTS FOR COLORS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const colorSelected = prompt('Chose a color Pink, Pinker, Pinkest: ');

// switch(colorSelected) {
//     case 'Pink':
//         alert(`You chose ${colorSelected}`);
//     break;
//     case 'pink':
//         alert(`You chose ${colorSelected}`);
//     break;
//     case 'Pinker':
//         alert(`You chose ${colorSelected}`);
//     break;
//     case 'pinker':
//         alert(`You chose ${colorSelected}`);
//     break;
//     case 'Pinkest':
//         alert(`You chose ${colorSelected}`);
//     break;
//     case 'pinkest':
//         alert(`You chose ${colorSelected}`);
//     break;
//     case '':
//         alert(`Try entering something next time.... Please don't leave it blank.... `);
//     break;
//     default:
//         console.log('Sorry Bro, you did not enter a proper color');
// }

// REAL LIFE EXAMPLE OF CALLING IN A FUNCTION $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function getWeatherReport(day, time, temperature) {
//     const correctDayFormat = day.toUpperCase();
//     const correctTimeFormat = time.toLowerCase();
//     const correctTemperatureFormat = parseInt(temperature);
//     // const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}. The Temperature is a rockin ${correctTemperatureFormat} degrees`;
//     // return summary;
//     const getSummary = this.getWeatherSummary(correctDayFormat, correctTimeFormat, correctTemperatureFormat);

//     return getSummary;
// }

// function getWeatherSummary(day, time, temperature) {
//     const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}. The Temperature is a rockin ${correctTemperatureFormat} degrees`;
//     return summary;
// }

// console.log(getWeatherReport('wednesday', '6:00PM', '90'));

// ARRAY EXAMPLE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let myArrayOfRandomInfo = [
//     'Full Metal Jacket',
//     13,
//     false,
//     '1992'
// ];

// // console.log(myArrayOfRandomInfo.length);
// console.log(myArrayOfRandomInfo[0])
// console.log(myArrayOfRandomInfo[1])
// console.log(myArrayOfRandomInfo[2])
// console.log(myArrayOfRandomInfo[3])
// console.log(Array.isArray(myArrayOfRandomInfo));
// myArrayOfRandomInfo.push('I like SpongeBob SquarePants'); // pushes array 0 to 1 and adds in first position
// console.log(myArrayOfRandomInfo.length);
// console.log(myArrayOfRandomInfo);
// myArrayOfRandomInfo.unshift('I am now #1'); // adds to beginning of array
// console.log(myArrayOfRandomInfo);
// myArrayOfRandomInfo.pop(); // removes last array
// console.log(myArrayOfRandomInfo);
// myArrayOfRandomInfo.shift(); // deletes first 
// console.log(myArrayOfRandomInfo);


// myArrayOfRandomInfo.splice(1,0,'December');
// console.log(myArrayOfRandomInfo);

// myArrayOfRandomInfo.splice(0, 0, 'Fun', 'Stuff', 'Here');  // first number starting position, second is how many replacing
// console.log(myArrayOfRandomInfo);

// let newArrayOfRandomInfo = myArrayOfRandomInfo.slice(1);
// console.log(newArrayOfRandomInfo);

// let findPositionToRemove = newArrayOfRandomInfo.indexOf('December');
// console.log(newArrayOfRandomInfo);

// let refreshed = newArrayOfRandomInfo.splice(findPositionToRemove, 1);
// console.log(refreshed);


// console.log(myArrayOfRandomInfo.reverse());


// EXAMPLE Multiple Arrays $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let favoriteMoviesOne = ['Full Metal Jacket', 'Lee Ermy'];
// let favoriteMoviesTwo = ['Braveheart', 'Mel Gibson'];
// let favoriteMoviesThree = ['SpongeBob SquarePants The Movie', 'SpongeBob SquarePants'];
// let favoriteMoviesFour = ['John Wick', 'Keanu Reeves'];
// let favoriteMoviesFive = ['The Matrix', 'Laurence Fishburn'];

// let movieTitles = [favoriteMoviesOne[0], favoriteMoviesTwo[0], favoriteMoviesThree[0], favoriteMoviesFour[0], favoriteMoviesFive[0]];
// alert(movieTitles);
// let favoriteAndNotFavorite = [favoriteMoviesOne[0], favoriteMoviesThree[0]];
// console.log(favoriteAndNotFavorite);
// alert(movieTitles.length);

// LOOPS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let x = 0;
// while (x <= 10) {
//     console.log(x);
//     x++;
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// for(let j = 0; j <= 10, j++) {
//     if (j == 4); {
//         continue;
//     }
// }

let i=0;

// do {
//     console.log(i);
//     i++;
// }
// while (i <= 10);

// let array3 = ['Mike', 2, 'John', 4, 5, 6, 7, 8, 9, 10];

// array3.forEach(function(x) {
//     console.log(x);
// })

// let myString = "Hi, my name is Mike";

// for (i of myString) {
//     console.log(i);
// }

// for (value of myString) {
//     console.log(value);
// }

// let people = [{
//     firstName: 'Mike',
//     lastName: 'Kraus',
//     age: 22
// }, 
// {
//     firstName: 'John',
//     lastName: 'Doughy',
//     age: 29
// }];

// for (person in people) {
//     console.log(people[person]);
// }

// for (person of people) {
//     console.log(person.firstName)
// }

// for (person of people) {
//     alert(person.lastName);
// }

// for (person of people) {
//     console.log(person.age);
// }

// create 3 variable of promt value

// const taskOne = prompt('Give me the first task you need to complete');
// const taskTwo = prompt('Give me the second take you need to complete');
// const taskThree = prompt('Give me the Third take you need to complete');

// let firstArrayOfTasks = [taskOne, taskTwo, taskThree];

// let secondArrayOfTasks = [
//     [taskOne],
//     [taskTwo],
//     [taskThree]
// ]

// console.log(`First Array: `, firstArrayOfTasks);
// console.log(`Second Array `, secondArrayOfTasks);

// const limit = 3;
// for(m = 0; m < limit; m++); {
//     secondArrayOfTasks[m].push(`This will take ${Math.floor(Math.random(), 15)}`);
//     console.log(secondArrayOfTasks)
// }

// const secondArrayOfTasks.length = 3;
// for(m = 0; m < limit; m++); {
    
// }

// DAY 5 JS &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// Anon Function
// let example = function (val) {
//     console.log(`Hello There`);
// }

// Named Function
// function exampleName () {
//     console.log(`Hello There`);
// }

// example();
// exampleName();


// Before Parameter
// After Argument
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const turnValueUppercase = val => console.log(val.toUpperCase());
// const multiplyValues = (arg1, arg2) => {return arg1 * arg2};

// turnValueUppercase('hi');
// turnValueUppercase('hello!');
// console.log(multiplyValues (12232, 1221321323));

// function turnValueUppercase(val) {
//     console.log(val.toUpperCase());
// }


// #$#$#$#$#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$###################################################################

// Grocery List 

// Create a list of three names

// let names = [
//     'Mike',
//     'Robert',
//     'Heather',
//     'Jhonny'
// ];

// // Create a greeting

// const greeting = name => `Good Evening, ${name}`;

// // test results first
// console.log(`The array of names ${names}`, `greeting function value: ${greeting ('Example')}`);

// const limit = 3;
// // loop through names and add reading function to it
// for(m = 0; m < names.length; m++) {
//     console.log(greeting(names[m]));
// }

// grab element from HTML
// const h1 = document.getElementById('greeting');

// const myList = document.getElementById('groceryList');

// const listItem = document.getElementById('groceryItem');

// const myInput = document.getElementById('getGroceryItem');

//

// const greeting = document.getElementById('greeting');

// const groceryList = document.getElementById('groceryList');

// const groceryItem = document.getElementById('groceryItem');

// const getGroceryItem = document.getElementById('getGroceryItem');


// let arrayOfGroceryItems = [];

// greeting.innerHTML = 'Mike\'s Grocery List';

// // if(groceryList === null) {
// //     groceryItem.innerHTML = 'N/A';
// // }

// // create function to add to grocery list

// // const addGroceryItem = (arr, value) => arr.push(value);
// // console.log(addGroceryItem(arrayOfGroceryItems, 'Carrot'));
// // console.log(arrayOfGroceryItems);

// function addGroceryItem(arr, value) {
//     arr.push(value);
//     }

// function ejectGroceryItemToList(val) {
    //grab list item
    //push array items to list

    // for(grocery = 0; grocery < 2; grocery++) {
    //     groceryItem.innerHTML = val;
    // }
// }


    // foreach() {
    //     groceryItem.innerHTML = values;
    // }

// addGroceryItem(arrayOfGroceryItems, 'Testing');
// addGroceryItem(arrayOfGroceryItems, 'Fudge');
// console.log(arrayOfGroceryItems);
// ejectGroceryItemToList(arrayOfGroceryItems);

// function ejectGroceryItemToList(values) { 
//     //goal: push array items to list on html
// ​
//     /* the reason I called my list items in here because i need to loop through the id #'s to add individual array values into them, i do this by adding the `grocery` param by one so it adds; i am just appending the GROCERY val to the name to the id*/
//     for (grocery = 0; grocery < arrayOfGroceryItems.length; grocery++) {
//             let li = document.getElementById(`groceryItem${grocery + 1}`);
//             // now that I can loop through my list items, i can now eject EACH array val into EACH separate list item.
//             li.innerHTML = values[grocery];
//         }
// }



// ##################################################################################################################################

let fahrenheitTemperature = prompt('Please enter the current temperature in Farenheit: ');
let convertedFahrenheitTemperature = ((fahrenheitTemperature - 32) * 5 / 9);

alert(`The current temperature in Fahrenheit is: ${fahrenheitTemperature} degrees. The current temperature in Celsius is: ${convertedFahrenheitTemperature} degrees.`);

let celsiusTemperature = prompt(`Please enter the current temperature in Celsius: `);
let convertedCelsiusTemperature =((celsiusTemperature *9  / 5) + 32);

alert(`The current temperature in Celsius is: ${celsiusTemperature} degrees. The current temperature in Fahrenheit is: ${convertedCelsiusTemperature} degrees.`);

console.log(convertedFahrenheitTemperature);
console.log(convertedCelsiusTemperature);

const H3 = document.getElementById('whatIsTheTemperatureInFahrenheit');
H3.innerHTML = convertedCelsiusTemperature;
console.log(H3);
