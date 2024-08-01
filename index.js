"use strict";
const userName = "Takeshi";
const userAge = 20;
// console.log(`name:${userName},` + `age:${userAge}`);
const color = [
    'red', 'blue', 'green'
];
// console.log(color);
var role;
(function (role) {
    role["Manager"] = "Manager";
    role["Developer"] = "Developer";
    role["Designer"] = "Developer";
})(role || (role = {}));
// console.log(role);
const sum = (a, b) => {
    return a + b;
};
const sumA = sum(1, 2);
console.log(sumA);
const strConcat = (strA, strB) => {
    return strA + strB;
};
const concatString = strConcat('type', 'script');
console.log(concatString);
