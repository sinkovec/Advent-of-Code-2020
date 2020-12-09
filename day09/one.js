module.exports = (input, preambleLength=25) => {
    var lines = input.split('\n').map(Number);
    outer:
    for (var i = preambleLength; i < lines.length; i++) {
        for (var j = i - preambleLength; j < i - 1; j++) {
            for (var k = j + 1; k < i; k++) {
                if (lines[j] + lines[k] === lines[i]) {
                    continue outer;
                }
            }
        }
        return lines[i];
    }
};