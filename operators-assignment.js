//Q1. ARITHMETIC OPERATORS
let a = 20;
let b = 6;

let addition = a + b;
console.log(addition)

let subtraction = a - b;
console.log(subtraction)

let multiplication = a * b
console.log(multiplication)

let division = a / b
console.log(division)

let remainder = a % b
console.log(remainder)

let exponential = a ** b
console.log(exponential)

//Q2 ASSIGNMENT OPERATORS
let score = 10
let ans1 =  score += 5
console.log(ans1)

let ans2 = score -= 3
console.log(ans2)

let ans3 = score *= 2
console.log(ans3)

let ans4 = score /= 4
console.log(ans4)

console.log(score)

//Q3 COMPARISON OPERATORS
let x = 15
let y = 10

let comGreat = x > y
console.log(comGreat)

let comLess = x < y
console.log(comLess)

let comEqual = x == y
console.log(comEqual)

let greatEqual = x >= y
console.log(greatEqual)

let lessEqual = x <= y
console.log(lessEqual)

console.log(5 == '5')
//this questions display's true because then the equality sign is used it converted the string into its numerical equivalent (AKA type coersion)

console.log(5 === '5')
//this display false because the strict operator checkss both value and see that one is a number and other is a string.

//Q4 LOGICAL OPERATORS
let age = 20
let hasID = true
let isStudent = false

console.log(age >= 18 && hasID)

console.log(age < 18 || hasID)

console.log(!hasID)

console.log(isStudent || hasID)

console.log(age >= 18 && isStudent)

//Q5 INCREMENT AND DECREMENT OPERATORS
let number = 10;
number++
console.log(number);

number--
console.log(number);

console.log(10 + 5 * 2);
//i think the answer will be 20
console.log((10+5) * 2);
//i think the answer will be 30
console.log(20 % 3);
//i think the answer will be 2.22222222
console.log(2 ** 4);
//i think the answer will be 16
console.log(10 > 5 && 5 < 2);
//i think the answer will be false
console.log(10 > 5 || 5 < 2);
//i think the answer will be true
console.log(!(10 > 5));
//i think the answer will be false
console.log(10 != "10");
//i think the answer will be false
console.log(10 !== "10");
//i think the answer will be true
console.log(5 + "5");
//i think the answer will be 55