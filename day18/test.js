const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Day 18: Operation Order', () => {

    it('Part One: test 1 + 2 * 3 + 4 * 5 + 6 = 71', () => {
        assert.strictEqual(one('1 + 2 * 3 + 4 * 5 + 6'), 71);
    });

    it('Part One: test 1 + (2 * 3) + (4 * (5 + 6)) = 51', () => {
        assert.strictEqual(one('1 + (2 * 3) + (4 * (5 + 6))'), 51);
    });

    it('Part One: test 2 * 3 + (4 * 5) = 26', () => {
        assert.strictEqual(one('2 * 3 + (4 * 5)'), 26);
    });

    it('Part One: test 5 + (8 * 3 + 9 + 3 * 4 * 3) = 437', () => {
        assert.strictEqual(one('5 + (8 * 3 + 9 + 3 * 4 * 3)'), 437);
    });

    it('Part One: test 5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4)) = 12240', () => {
        assert.strictEqual(one('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'), 12240);
    });

    it('Part One: test ((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2 = 13632', () => {
        assert.strictEqual(one('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2'), 13632);
    });

    


    it('Part Two: test 1 + 2 * 3 + 4 * 5 + 6 = 231', () => {
        assert.strictEqual(two('1 + 2 * 3 + 4 * 5 + 6'), 231);
    });

    it('Part Two: test 1 + (2 * 3) + (4 * (5 + 6)) = 51', () => {
        assert.strictEqual(two('1 + (2 * 3) + (4 * (5 + 6))'), 51);
    });

    it('Part Two: test 2 * 3 + (4 * 5) = 46', () => {
        assert.strictEqual(two('2 * 3 + (4 * 5)'), 46);
    });

    it('Part Two: test 5 + (8 * 3 + 9 + 3 * 4 * 3) = 1445', () => {
        assert.strictEqual(two('5 + (8 * 3 + 9 + 3 * 4 * 3)'), 1445);
    });

    it('Part Two: test 5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4)) = 669060', () => {
        assert.strictEqual(two('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'), 669060);
    });

    it('Part Two: test ((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2 = 23340', () => {
        assert.strictEqual(two('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2'), 23340);
    });
});