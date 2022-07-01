'use strict';
/*  
let hasDriversLicense = false;
const passTest = true;

function logger(params) {
  console.log('my name is gedeon ');
}
logger(); // calling the function

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//function declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge(1996);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1996);
console.log(age1, age2);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
// the function has 2 parameters
const yearsRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsRetirement(1991, 'Gedeon')); // we call the function
console.log(yearsRetirement(1996, 'Daniel'));

// Calling a function inside a function:
const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applesPieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);
  const juice = `Juice with ${applesPieces} apples and ${orangesPieces} oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calAvera = (a, b, c) => (a + b + c) / 3;
console.log(calAvera(3, 4, 5));
// test1
let scoreDol = calAvera(44, 23, 71);
let scoreKo = calAvera(65, 54, 49);
console.log(scoreDol, scoreKo);

const checkWinner = function (avgDol, avgKoa) {
  if (avgDol >= 2 * avgKoa) {
    console.log(`Dolphins win (${avgDol} vs ${avgKoa})`);
  } else if (avgKoa >= 2 * avgDol) {
    console.log(`Dolphins win (${avgKoa} vs ${avgDol})`);
  } else {
    console.log('No team wins.........');
  }
};
checkWinner(scoreDol, scoreKo);
// Test 2
scoreDol = calAvera(85, 54, 41);
scoreKo = calAvera(23, 34, 27);
console.log(scoreDol, scoreKo);
checkWinner(scoreDol, scoreKo);


const friends = ['gedeon', 'kakona', 'mbuyi'];
console.log(friends);

const years = new Array(1990, 2000, 3000, 4000);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);

const firstN = 'Mwadi';
const jonas = [firstN, 'Gedeon', 2039 - 1999, 'Teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];

console.log(ages);

// add element
const friends = ['gedeon', 'kakona', 'mbuyi'];
friends.push('jay');
console.log(friends);
friends.unshift('John');
console.log(friends);
// remove elements

friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('kakona'));

friends.push(23);
console.log(friends.includes('gedeon'));
console.log(friends.includes('kabeya'));
console.log(friends.includes(23));

if (friends.includes('gedeon')) {
  console.log('you have a friend called Gedeon');
}

// code challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

const jonasArray = [
  'jonas',
  'kakona',
  'mbuyi',
  2037 - 1996,
  ['Micheal', 'Peter', 'Steven'],
];
// Object

console.log(jonas.firstName);
console.log(jonas['lastName']);

const interestIn = prompt(
  'What do you want to know about Jonas? Choose between firstname, lastname, age, job and friends'
);
if (jonas[interestIn]) {
  console.log(jonas[interestIn]);
} else {
  console.log(
    'Wrong request? Coose between firstname, lastname, age, job and friends'
  );
}

jonas.location = 'Portugal';
jonas['Twitter'] = '@gedeonkakona';
console.log(jonas);

// challenge
// "Jonas has 3 friends, and his best friend is called Micheal"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

const jonas = {
  firstName: 'Jonas',
  lastName: 'kakona',
  birthYear: 1996,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven'],
  hasDriversLicense: true,

  //calcAge: function (birthYear) {
  //  return 2037 - birthYear;
  // },
  //calcAge: function () {
  // console.log(this);
  //  return 2037 - this.birthYear;
  //},

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - years old ${
      jonas.job
    } and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);

//challenge
// "Jonas is a 46-years old teacher, and he has a driver's license"
console.log(jonas.getSummary());


// challenge 3

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: 'John Miller',
  mass: 92,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName} 's BMI (${mark.bmi}) is higher than ${john.fullName} 's BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName} 's BMI (${john.bmi}) is higher than ${mark.fullName} 's BMI (${mark.bmi})`
  );
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

const jonas = [
  'Jonas',
  'kakona',
  2030 - 1996,
  'teacher',
  ['Micheal', 'Peter', 'Steven'],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // filling types array

  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1964, 1987];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
