module.exports = (input) => {
    var mask;
    return Object.values(input.split('\n').reduce((mem, line) => {
        if (line.startsWith('mask')) {
            mask = /mask = (.+)/.exec(line)[1];
            return mem;
        }
        var [memAddr, memValue] = /mem\[(\d+)\] = (\d+)/.exec(line).slice(1,3).map(Number);
        memAddr = memAddr.toString(2)
            .padStart(36, '0')
            .split('')
            .map((x,i) => ['X', '1'].includes(mask[i]) ? mask[i] : x)
            .join('');
        var memAddrSpace = memAddr.split('').reduce((memArr,current) => {
            if (current === 'X') {
                var newMemArr = [];
                for (var mem of memArr) {
                    newMemArr.push(mem.replace(/X/, '0'));
                    newMemArr.push(mem.replace(/X/, '1'));
                }
                memArr = newMemArr;
            }
            return memArr;
        }, [memAddr]).map(x => parseInt(x,2));
        memAddrSpace.forEach(addr => {
            mem[addr] = memValue;
        });
        return mem;
    }, {})).reduce((a,b) => a+b, 0);
};