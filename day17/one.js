module.exports = (input) => {
    var matrix = pad(input).split('\n').reduce((m,line) => {
        m.push(line.split(''));
        return m;
    }, []);
    var n = matrix.length;
    matrix = [matrix];
    for (var i = 0; i < 6; i++) {
        matrix.unshift(createEmptyMatrix(n));
        matrix.push(createEmptyMatrix(n));
        matrix = simulate(matrix);
    }
    return matrix.flat().flat().filter(e => e === '#').length;
};

function pad(input) {
    var padding = '......';
    var length = input.split('\n').length;
    input = input.split('\n').map(s => padding + s + padding).join('\n');
    padding = padding + Array.from({length: length}, () => '.').join('') + padding;
    for (var i = 0; i < 6; i++) {
        input = padding + '\n' + input + '\n' + padding;
    }
    return input;
}

function createEmptyMatrix(n) {
    return Array.from({length : n}, () => Array.from({length : n}, () => '.'));
}

function simulate(matrix) {
    var result = JSON.parse(JSON.stringify(matrix));
    for (var z = 0; z < matrix.length; z++) {
        for (var x = 0; x < matrix[z].length; x++) {
            for (var y = 0; y < matrix[z][x].length; y++) {
                result[z][x][y] = applyRules(matrix, z, x, y);
            }
        }       
    }
    return result;
}

function applyRules(matrix, z, x, y) {
    var numOfActiveCubes = countAdjacentActiveCubes(matrix, z, x, y);
    if (matrix[z][x][y] === '#' && 2 <= numOfActiveCubes && numOfActiveCubes <= 3) {
        return '#';
    }
    if (matrix[z][x][y] === '.' && numOfActiveCubes === 3) {
        return '#';
    }
    return '.';
}

function countAdjacentActiveCubes(matrix, z, x, y) {
    var counter = 0;
    for (var i = Math.max(z-1,0); i <= Math.min(z+1,matrix.length-1); i++) {
        for (var j = Math.max(x-1,0); j <= Math.min(x+1,matrix[i].length-1); j++) {
            for (var k = Math.max(y-1,0); k <= Math.min(y+1,matrix[i][j].length-1); k++) {
                if (!(i === z && j === x && k === y) && matrix[i][j][k] === '#') {
                    counter++;
                }
            }
        }
    }
    return counter;
}