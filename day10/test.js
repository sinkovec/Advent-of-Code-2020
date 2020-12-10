const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

let input =
`16
10
15
5
1
11
7
19
6
12
4`;

let input2 =
`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

describe('Day 10: Adapter Array', () => {

    it('Part One: test input', () => {
        assert.strictEqual(one(input), 35);
    });

    it('Part One: test input2', () => {
        assert.strictEqual(one(input2), 220);
    });

    it('Part Two: test input', () => {
        assert.strictEqual(two(input), 8);
    });

    it('Part Two: test input2', () => {
        assert.strictEqual(two(input2), 19208);
    });
});