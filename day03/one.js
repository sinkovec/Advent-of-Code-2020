module.exports = (input) => {
    var col = 0;
    return input.split('\n').map(str => str.trim()).reduce((sum, line) => {
        sum += line.charAt(col) === '#' ? 1 : 0;
        col = (col + 3) % line.length;
        return sum;
    }, 0);
};