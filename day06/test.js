const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input = 
`abc

a
b
c

ab
ac

a
a
a
a

b`;

describe('Day 6: Custom Customs', () => {
    it('Part One', () => {
        assert.strictEqual(one(input), 11);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 0);
    });
});