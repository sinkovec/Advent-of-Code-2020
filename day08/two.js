module.exports = (input) => {
    const instructions = input.split('\n');
    for (var i = 0; i < instructions.length; i++) {
        if (instructions[i].startsWith('acc')) {
            continue;
        }
        var modInstructions = [...instructions];
        modInstructions[i] = modInstructions[i].startsWith('nop') ? modInstructions[i].replace('nop','jmp') : modInstructions[i].replace('jmp','nop');
        var executedInstructions = new Set();
        var acc = 0;
        var programCounter = 0;
        while (programCounter < modInstructions.length) {
            if (executedInstructions.has(programCounter)) {
                break;
            }
            executedInstructions.add(programCounter);
            var [op, value] = modInstructions[programCounter].split(' ');
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
        if (programCounter >= modInstructions.length) {
            return acc;
        }
    }
};