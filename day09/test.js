const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input = 
`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

describe('Day 9: Encoding Error', () => {

    it('Part One', () => {
        assert.strictEqual(one(input,5), 127);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input,5), 62);
    });
});