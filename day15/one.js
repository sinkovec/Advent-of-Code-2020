module.exports = (input) => {
    var numbers = input.split(',').map(Number);
    while (numbers.length <= 2020) {
        var spokenNumber = numbers[numbers.length - 1];
        var lastTimeSpoken = numbers.lastIndexOf(spokenNumber, numbers.length - 2);
        numbers.push(lastTimeSpoken === -1 ? 0 : numbers.length - lastTimeSpoken - 1);
    }
    return spokenNumber;
};