const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Day 15: Rambunctious Recitation', () => {

    it('Part One: test "0,3,6"', () => {
        assert.strictEqual(one('0,3,6'), 436);
    });

    it('Part One: test "1,3,2"', () => {
        assert.strictEqual(one('1,3,2'), 1);
    });

    it('Part One: test "2,1,3"', () => {
        assert.strictEqual(one('2,1,3'), 10);
    });

    it('Part One: test "1,2,3"', () => {
        assert.strictEqual(one('1,2,3'), 27);
    });

    it('Part One: test "2,3,1"', () => {
        assert.strictEqual(one('2,3,1'), 78);
    });

    it('Part One: test "3,2,1"', () => {
        assert.strictEqual(one('3,2,1'), 438);
    });

    it('Part One: test "3,1,2"', () => {
        assert.strictEqual(one('3,1,2'), 1836);
    });



    it.skip('Part Two: test "0,3,6"', () => {
        assert.strictEqual(two('0,3,6'), 175594);
    });

    it.skip('Part Two: test "1,3,2"', () => {
        assert.strictEqual(two('1,3,2'), 2578);
    });

    it.skip('Part Two: test "2,1,3"', () => {
        assert.strictEqual(two('2,1,3'), 3544142);
    });

    it.skip('Part Two: test "1,2,3"', () => {
        assert.strictEqual(two('1,2,3'), 261214);
    });

    it.skip('Part Two: test "2,3,1"', () => {
        assert.strictEqual(two('2,3,1'), 6895259);
    });

    it.skip('Part Two: test "3,2,1"', () => {
        assert.strictEqual(two('3,2,1'), 18);
    });

    it.skip('Part Two: test "3,1,2"', () => {
        assert.strictEqual(two('3,1,2'), 362);
    });
});