module.exports = (input) => {
    var data = input.split('\n\n');

    var ranges = data[0].split('\n').reduce((arr, line) => {
        var [, min1, max1, min2, max2] = /.*: (\d+)-(\d+) or (\d+)-(\d+)/.exec(line);
        arr.push([[+min1, +max1], [+min2, +max2]]);
        return arr;
    }, []);
    
    var otherTickets = data[2].split('\n').slice(1).reduce((arr,line) => {
        arr.push(line.split(',').map(Number));
        return arr;
    }, []);
    
    return otherTickets.reduce((sum,ticket) => {
        for (const x of ticket) {
            var isValid = ranges.some(r => {
                var r0 = r[0], r1 = r[1];
                return (r0[0] <= x && x <= r0[1]) || (r1[0] <= x && x <= r1[1]);
            });
            if (!isValid) {
                sum += x;
            }
        }
        return sum;
    }, 0);
};