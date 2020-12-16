const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');

let input =
`class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`;

describe('Day 16: Ticket Translation', () => {

    it('Part One', () => {
        assert.strictEqual(one(input), 71);
    });
});