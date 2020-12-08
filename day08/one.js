module.exports = (input) => {
    var instructions = input.split('\n');
    var executedInstructions = new Set();
    var acc = 0;
    var programCounter = 0;
    while (programCounter < instructions.length) {
        if (executedInstructions.has(programCounter)) {
            break;
        }
        executedInstructions.add(programCounter);
        var [op, value] = instructions[programCounter].split(' ');
        switch (op) {
        case 'nop':
            programCounter++;
            break;
        case 'acc':
            acc += Number(value);
            programCounter++;
            break;
        case 'jmp':
            programCounter += Number(value);
            break;
        default:
            break;
        }
    }
    return acc;
};