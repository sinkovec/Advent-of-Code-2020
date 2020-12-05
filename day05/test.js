const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');

describe('Day 5: Binary Boarding', () => {
    it('Part One: test FBFBBFFRLR', () => {
        assert.strictEqual(one('FBFBBFFRLR'), 357);
    });
    it('Part One: test BFFFBBFRRR', () => {
        assert.strictEqual(one('BFFFBBFRRR'), 567);
    });
    it('Part One: test FFFBBBFRRR', () => {
        assert.strictEqual(one('FFFBBBFRRR'), 119);
    });
    it('Part One: test BBFFBBFRLL', () => {
        assert.strictEqual(one('BBFFBBFRLL'), 820);
    });
});