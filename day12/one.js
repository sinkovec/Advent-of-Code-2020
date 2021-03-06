module.exports = (input) => {
    var facingDirection = 0; // 0 : East, 1 : North, 2 : West, 3 : South
    var [x, y] = input.split('\n').map(line => {
        var action = line[0];
        var value = Number(line.slice(1));

        if (action === 'E' || action === 'W') {
            return [0, action === 'E' ? value : -value];
        } 
        if (action === 'N' || action === 'S') {
            return [1, action === 'N' ? value : -value];
        }
        if (action === 'L' || action === 'R') {
            value /= 90;
            return [2, action === 'L' ? value : 4 - value];
        }
        return [3, value];
    }).reduce((pos, instruction) => {
        var action = instruction[0];
        var value = instruction[1];
        if (action < 2) {
            pos[action] += value;
        } else if (action === 2) {
            facingDirection = (facingDirection + value) % 4;
        } else {
            pos[facingDirection % 2] += value * (facingDirection < 2 ? 1 : -1);
        }
        return pos;
    }, [0, 0]);
    return Math.abs(x) + Math.abs(y);
};