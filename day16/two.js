module.exports = (input) => {
    var [ranges, myTicket, otherTickets] = input.split('\n\n');

    ranges = ranges.split('\n').reduce((map, line) => {
        var [, name, min1, max1, min2, max2] = /(.*): (\d+)-(\d+) or (\d+)-(\d+)/.exec(line);
        map[name] = [[+min1, +max1], [+min2, +max2]];
        return map;
    }, {});

    myTicket = myTicket.split('\n')[1].split(',').map(Number);
    
    otherTickets = otherTickets.split('\n').slice(1).reduce((arr,line) => {
        arr.push(line.split(',').map(Number));
        return arr;
    }, []);

    var isInRange = (x, r) => {
        var r0 = r[0], r1 = r[1];
        return (r0[0] <= x && x <= r0[1]) || (r1[0] <= x && x <= r1[1]);
    };
    
    var validTickets = otherTickets.reduce((arr,ticket) => {
        for (const x of ticket) {
            var isValid = Object.values(ranges).some(r => isInRange(x,r));
            if (!isValid) {
                return arr;
            }
        }
        arr.push(ticket);
        return arr;
    }, []);

    var columns = validTickets.reduce((arr,ticket) => {
        ticket.forEach((x,i) => {
            arr[i].push(x);
        });
        return arr;
    }, Array.from({length: Object.keys(ranges).length}, () => []));
    
    var fieldOrderCandidates = columns.reduce((order, col, realPos) => {
        Object.entries(ranges).forEach(([name, r]) => {
            if (col.every(x => isInRange(x,r))) {
                order[name].push(realPos);
            }
        });
        return order;
    }, Object.keys(ranges).reduce((map, r) => { map[r] = []; return map; }, {}));

    fieldOrderCandidates = Object.entries(fieldOrderCandidates).reduce((ret, entry) => {
        const [key, value] = entry;
        value.unshift(key);
        ret.push(value);
        return ret;
    }, []);
    fieldOrderCandidates.sort((a,b) => a.length - b.length);

    var fieldOrder = {};
    fieldOrder[fieldOrderCandidates[0][0]] = fieldOrderCandidates[0][1];
    for (var i = 1; i < fieldOrderCandidates.length; i++) {
        var name = fieldOrderCandidates[i][0];
        var position = setMinus(fieldOrderCandidates[i].slice(1), fieldOrderCandidates[i-1].slice(1));
        fieldOrder[name] = position;
    }
    
    return Object.entries(fieldOrder)
        .filter(e => e[0].startsWith('departure'))
        .reduce((prod,e) => prod * myTicket[e[1]], 1);
};

function setMinus(setA, setB) {
    return [...setA].filter(x => !setB.includes(x))[0];
}