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

const ageEntered = prompt('Are you over 18?');

switch (ageEntered) {
    case 'No':
        H1.innerHTML=`You are not old enough, please leave now`;
        break;
    case 'Yes':
        H1.innerHTML=`Your are over 18, are you younger than 80?`;
        const lessThanEighty = prompt('Are you younger than 80?');
        switch (lessThanEighty) {
            case 'Yes':
                H1.innerHTML=`Do you even Star Wars?`;
                const evenStarWars = prompt('Do you even Star Wars?');
                switch (evenStarWars) {
                    case 'Yes':
                        H1.innerHTML=`The force is strong with this one!`;
                        alert=('If you only knew the power, of the dark side!');
                    case 'No':
                        H1.innerHTML=`How dare you not Star Wars?`;
                        break;
                }
                break;
            case 'No':
                H1.innerHTML="Go eat some prunes!";
        }
        break;
    case (ageEntered > 80):
        H1.innerHTML=`You are too old, do you like prunes?`;
        break;
    default:
        H1.innerHTML=`You didn't enter an age`;
}