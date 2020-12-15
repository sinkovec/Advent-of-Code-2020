module.exports = (input) => {
    var startingNumbers = input.split(',').map(Number);
    var numbers = startingNumbers.reduce((map,current,index) => map.set(current,index+1), new Map());
    var spokenNumber = 0;
    var turn = startingNumbers.length + 1;
    while (turn < 30000000) {
        var newSpokenNumber = numbers.has(spokenNumber) ? turn - numbers.get(spokenNumber) : 0;
        numbers.set(spokenNumber, turn);
        spokenNumber = newSpokenNumber;
        turn++;
    }
    return spokenNumber;
};