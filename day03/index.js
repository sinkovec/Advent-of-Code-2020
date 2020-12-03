const fs = require('fs');
const path = require('path');
const one = require('./one');
const two = require('./two');

let input = fs.readFileSync(`${path.resolve()}/input`).toString();

// Part One
console.log(one(input));

// Part Two
console.log(two(input));