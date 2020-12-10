module.exports = (input) => {
    var data = input.split('\n').map(Number).sort((a,b) => a - b);
    data.unshift(0);
    data.push(data[data.length - 1] + 3);
    var result = 1;
    for (var i = 0; i < data.length; i++) {
        var factor = 1;
        for (var j = 2; j <= 4 && i+j < data.length; j++) {
            if (data[i+j] - data[i] === j) {
                factor *= 2;
            }
        }
        result *= (factor === 8 ? factor - 1 : factor);
        i += Math.log2(factor);
    }
    return result;
};