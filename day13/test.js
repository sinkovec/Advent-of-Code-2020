const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Day 13: Shuttle Search', () => {

    it('Part One', () => {
        assert.strictEqual(one('939\n7,13,x,x,59,x,31,19'), 295);
    });

    it('Part Two : input 1', () => {
        assert.strictEqual(two('\n7,13,x,x,59,x,31,19'), 1068781);
    });

    it('Part Two : input 2', () => {
        assert.strictEqual(two('\n17,x,13,19'), 3417);
    });

    it('Part Two : input 3', () => {
        assert.strictEqual(two('\n67,7,59,61'), 754018);
    });

    it('Part Two : input 4', () => {
        assert.strictEqual(two('\n67,x,7,59,61'), 779210);
    });

    it('Part Two : input 5', () => {
        assert.strictEqual(two('\n67,7,x,59,61'), 1261476);
    });

    it('Part Two : input 6', () => {
        assert.strictEqual(two('\n1789,37,47,1889'), 1202161486);
    });
});