const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input =
`mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;

let input2 = 
`mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;

describe('Day 14: Docking Data', () => {

    it('Part One', () => {
        assert.strictEqual(one(input), 165);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input2), 208);
    });
});