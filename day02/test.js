const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Day 1: Report Repair', () => {
    let input = 
`1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

    it('Part One', () => {
        assert.strictEqual(one(input), 2);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 1);
    });
});