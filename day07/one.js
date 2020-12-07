module.exports = (input) => {
    const data = input.split('\n').reduce((map,line) => {
        var [key, value] = line.split(' bags contain ');
        map[key] = value.split(',');
        return map;
    }, {});
    const bagsWithShinyGold = new Set(['shiny gold']);
    do {
        var length = bagsWithShinyGold.size;
        for (const color in data) {
            for (const bag of bagsWithShinyGold) {
                if (data[color].some(e => e.includes(bag))) {
                    bagsWithShinyGold.add(color);
                }
            }
        }
    } while (length !== bagsWithShinyGold.size);
    return bagsWithShinyGold.size - 1;
};