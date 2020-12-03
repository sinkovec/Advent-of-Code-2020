module.exports = (input) => {
    input = input.split('\n').map(str => str.trim());
    return [[1,1], [3,1], [5,1], [7,1], [1,2]].reduce((product,direction) => product * numberOfTreesEncountered(input, direction[0], direction[1]), 1);
};

function numberOfTreesEncountered(input, right, down) {
    var col = 0;
    var sum = 0;
    for (let i = 0; i < input.length; i += down) {
        sum += input[i].charAt(col) === '#' ? 1 : 0;
        col = (col + right) % input[i].length;
    }
    return sum;
}