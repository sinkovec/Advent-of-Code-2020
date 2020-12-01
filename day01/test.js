const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Day 1: Report Repair', () => {
    let input = `1721
    979
    366
    299
    675
    1456`;

    it('Part One', () => {
        assert.strictEqual(one(input), 514579);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 241861950);
    });
});