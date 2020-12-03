const { describe,it } = require('mocha');
const assert = require('assert');
const one = require('./one');
const two = require('./two');

describe('Day 3: Toboggan Trajectory', () => {
    let input = `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#`;

    it('Part One', () => {
        assert.strictEqual(one(input), 7);
    });

    it('Part Two', () => {
        assert.strictEqual(two(input), 336);
    });
});