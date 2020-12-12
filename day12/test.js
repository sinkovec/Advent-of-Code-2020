const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input =
`F10
N3
F7
R90
F11`;

describe('Day 12: Rain Risk', () => {

    it('Part One', () => {
        assert.strictEqual(one(input), 25);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 286);
    });
});