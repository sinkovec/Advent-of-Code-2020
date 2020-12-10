module.exports = (input) => {
    var data = input.split('\n').map(Number).sort((a,b) => a - b);
    data.unshift(0);
    data.push(data[data.length - 1] + 3);
    var oneJoltDiff = 0, 
        threeJoltDiff = 0;
    for (var i = 0; i < data.length - 1; i++) {
        if (data[i+1] - data[i] === 1) {
            oneJoltDiff++;
        } else {
            threeJoltDiff++;
        }
    }
    return oneJoltDiff * threeJoltDiff;
};