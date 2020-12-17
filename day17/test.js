const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input = 
`.#.
..#
###`;

describe('Day 17: Conway Cubes', () => {

    it('Part One', () => {
        assert.strictEqual(one(input), 112);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 848);
    });
});