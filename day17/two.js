module.exports = (input) => {
    var matrix = pad(input).split('\n').reduce((m,line) => {
        m.push(line.split(''));
        return m;
    }, []);
    var n = matrix.length;
    matrix = [[matrix]];
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < matrix.length; j++) {
            matrix[j].unshift(createEmptyMatrix(n));
            matrix[j].push(createEmptyMatrix(n));
        }
        var m = matrix[0].length;
        matrix.unshift(createEmptySpace(n,m));
        matrix.push(createEmptySpace(n,m));
        matrix = simulate(matrix);
    }
    return matrix.flat().flat().flat().filter(e => e === '#').length;
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

function createEmptySpace(n, m) {
    return Array.from({length : m}, () => Array.from({length : n}, () => Array.from({length : n}, () => '.')));
}

function simulate(matrix) {
    var result = JSON.parse(JSON.stringify(matrix));
    for (var w = 0; w < matrix.length; w++) {
        for (var z = 0; z < matrix[w].length; z++) {
            for (var x = 0; x < matrix[w][z].length; x++) {
                for (var y = 0; y < matrix[w][z][x].length; y++) {
                    result[w][z][x][y] = applyRules(matrix, w, z, x, y);
                }
            }       
        }
    }
    return result;
}

function applyRules(matrix, w, z, x, y) {
    var numOfActiveCubes = countAdjacentActiveCubes(matrix, w, z, x, y);
    if (matrix[w][z][x][y] === '#' && 2 <= numOfActiveCubes && numOfActiveCubes <= 3) {
        return '#';
    }
    if (matrix[w][z][x][y] === '.' && numOfActiveCubes === 3) {
        return '#';
    }
    return '.';
}

function countAdjacentActiveCubes(matrix, w, z, x, y) {
    var counter = 0;
    for (var i = Math.max(w-1,0); i <= Math.min(w+1,matrix.length-1); i++) {
        for (var j = Math.max(z-1,0); j <= Math.min(z+1,matrix[i].length-1); j++) {
            for (var k = Math.max(x-1,0); k <= Math.min(x+1,matrix[i][j].length-1); k++) {
                for (var l = Math.max(y-1,0); l <= Math.min(y+1,matrix[i][j][k].length-1); l++) {
                    if (!(i === w && j === z && k === x && l === y) && matrix[i][j][k][l] === '#') {
                        counter++;
                    }
                }
            }
        }
    }
    return counter;
}