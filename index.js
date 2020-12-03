const fs = require('fs');
const { exit } = require('process');

if (process.argv.length !== 3) {
    console.error('Missing argument, which specifies the day.');
    exit(0);
}

const day = process.argv[2];

if (!/day[0-2][0-9]/.test(day)) {
    console.error('Given argument has a wrong format, should be "dayXX"');
    exit(0);
}

const one = require(`./${day}/one`);
const two = require(`./${day}/two`);

const input = fs.readFileSync(`./${day}/input`).toString();
// Part One
console.log(`Result for part one of ${day}: ${one(input)}`);
// Part Two
console.log(`Result for part two of ${day}: ${two(input)}`);