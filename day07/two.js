module.exports = (input) => {
    const data = input.split('\n').reduce((map,line) => {
        var [key, value] = line.substring(0,line.length-1).split(' bags contain ');
        map[key] = value.split(',').map(s => s.trim()).reduce((map,rule) => {
            var [num, color] = rule.split(/\s(.+)/);
            color = color.substring(0, color.lastIndexOf(' bag'));
            map[color] = num === 'no' ? 0 : Number(num);
            return map;
        }, {});
        return map;
    }, {});
    return getNumberOfBags(data, 'shiny gold') - 1;
};

function getNumberOfBags(data, bag) {
    var res = 1;
    for (const subBag in data[bag]) {
        res += data[bag][subBag] * getNumberOfBags(data,subBag);
    }
    return res;
}