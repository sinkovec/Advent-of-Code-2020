module.exports = (input) => {
    var mask;
    return Object.values(input.split('\n').reduce((mem, line) => {
        if (line.startsWith('mask')) {
            mask = /mask = (.+)/.exec(line)[1];
            return mem;
        }
        var [memAddr, memValue] = /mem\[(\d+)\] = (\d+)/.exec(line).slice(1,3).map(Number);
        memValue = parseInt(memValue.toString(2)
            .padStart(36, '0')
            .split('')
            .map((x,i) => mask[i] === 'X' ? x : mask[i])
            .join(''), 2);
        mem[memAddr] = memValue;
        return mem;
    }, {})).reduce((a,b) => a+b, 0);
};