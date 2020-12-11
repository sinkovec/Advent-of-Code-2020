const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input = 
`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

describe('Day 11: Seating System', () => {

    it('Part One', () => {
        assert.strictEqual(one(input), 37);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 26);
    });
});