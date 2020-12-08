const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input =
`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

describe('Day 1: Handheld Halting', () => {

    it('Part One', () => {
        assert.strictEqual(one(input), 5);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 8);
    });
});