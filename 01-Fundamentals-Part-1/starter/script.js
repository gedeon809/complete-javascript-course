/*
let js = 'amazing'
console.log('mbuyi kakona');
console.log(32)
let firstName= 'Gedeon kakona' //declaring a variable
console.log(firstName); // naming convention
let PI = 3.1415;

let country = 'DRC';
let continent ='Africa';
let population = 2.3456789
console.log(country);
console.log(continent)
console.log(population)

true;
console.log(true);
let javascriptIsFun = false;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'jonas')

let age = 30;
age = 31; // assigning a value to a variable
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now -  2022
console.log(ageJonas, ageSarah);

const firstName = 'Gedeon';
const lastName = 'Mbuyi';

console.log(firstName + ' ' + lastName);

const weightJohn = 78;
const heightJohn = 1.69;

const weightMark = 92;
const heightMark = 1.95;

console.log(weightJohn / heightJohn ** 2 );
console.log(weightMark / (heightMark * heightMark))

const firstName = 'gedeon';
const lastName = 'kakona';
const job = 'programmer';
const birthYear = 1991;  
const year = 2037

const gedeon = "I'm " + firstName +  ', a ' + (year - birthYear)   + ' years old ' + job + '!';
console.log(gedeon);

const gedeonNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(gedeonNew);


const age = 15;
if (age >= 18) {
  console.log('gedeon can start driving license😂🤣❤😍');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
}
// challenge number 2
const weightJohn = 78;
const heightJohn = 1.69;

const weightMark = 92;
const heightMark = 1.95;

const BMIJohn = weightJohn / heightJohn ** 2;
const BMIMark = weightMark / (heightMark * heightMark);

if (BMIJohn > BMIMark) {
  console.log(`john bmi(${BMIJohn}) is high.....`);
} else {
  console.log(`mark bmi (${BMIMark})is high.....`);
}

const inputYear = '1991';
console.log(Number(inputYear)); // converting version string to Number
console.log(Number(inputYear) + 12);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old '); //convert to string
console.log('23' - '10' - 3); // convet to number
console.log('23' / '2'); // convert to number

// 5 falsy values: 0, '', undefined, null. NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log('Jonas');

const age = 18;
if (age === 18) console.log('you just became an adult');

const fav = Number(prompt('what is your fav number?'));
console.log(fav);
console.log(typeof fav);

if (fav === 23) {
  console.log('cool! 23 is your fav number ');
} else if (fav === 7) {
  console.log('7 is also a ......');
} else {
  console.log('Number is not 23 0r 7 ');
}

if (fav !== 23) console.log('why not 23');

const hasGirlF = true;
const hasBoyF = true;
console.log(hasGirlF && hasBoyF);

const scoreDol = (96 + 108 + 89) / 3;
const scoreKoa = (88 + 91 + 140) / 3;
console.log(scoreDol);
console.log(scoreKoa);
if (scoreDol > scoreKoa && scoreDol >= 100) {
  console.log('The winner team is scoreDol');
} else if (scoreDol === scoreKoa) {
  console.log('No winner ........');
} else if (scoreKoa > scoreDol && scoreKoa >= 100) {
  console.log('the winner team is scorekoa');
}

const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('write code examples...');
    break;
  default:
    console.log('...........');
}

const age = 30;
age >= 18
  ? console.log('I like to drink wine')
  : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'wine❤😍❤❤' : 'water🎶🎶😎'}`);

const bill = Number(prompt('enter the amount of the bill:'));

let tip;
let finalAmout;
if (bill >= 50 && bill <= 300) {
  tip = (bill * 15) / 100;
  finalAmout = bill + tip;
  console.log(tip);
  console.log(finalAmout);
} else if (bill >= 300) {
  tip = (bill * 20) / 100;
  finalAmout = bill + tip;
  console.log(tip);
  console.log(finalAmout);
}
*/

const bill = Number(prompt('enter the amount of the bill:'));
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
