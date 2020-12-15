module.exports = (input) => {
    var startingNumbers = input.split(',').map(BigInt);
    var numbers = startingNumbers.reduce((map,current,index) => map.set(current,BigInt(index+1)), new Map());
    var spokenNumber = BigInt(0);
    var turn = BigInt(startingNumbers.length + 1);
    while (turn < 30000000) {
        var newSpokenNumber = numbers.has(spokenNumber) ? turn - numbers.get(spokenNumber) : BigInt(0);
        numbers.set(spokenNumber, turn);
        spokenNumber = newSpokenNumber;
        turn++;
    }
    return Number(spokenNumber);
};