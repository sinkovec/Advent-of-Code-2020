module.exports = (input) => {
    var matrix = input.split('\n').reduce((m,line) => {
        m.push(line.split(''));
        return m;
    }, []);
    do {
        var numOfOccupiedSeatsBeforeSimulation = getNumOfOccupiedSeats(matrix);
        matrix = simulate(matrix);
    } while (numOfOccupiedSeatsBeforeSimulation !== getNumOfOccupiedSeats(matrix));
    return getNumOfOccupiedSeats(matrix);
};

function simulate(matrix) {
    var result = JSON.parse(JSON.stringify(matrix));
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== '.') {
                result[i][j] = applyRules(matrix, i, j);
            }
        }
    }
    return result;
}

function applyRules(matrix, i, j) {
    var numOfOccupiedSeats = countOccupiedAdjacentSeats(matrix, i, j);
    if (matrix[i][j] === 'L' && numOfOccupiedSeats === 0) {
        return '#';
    }
    if (matrix[i][j] === '#' && numOfOccupiedSeats >= 4) {
        return 'L';
    }
    return matrix[i][j];
}

function countOccupiedAdjacentSeats(matrix, row, col) {
    var seatCounter = 0;
    for (var i = Math.max(row-1,0); i <= Math.min(row+1,matrix.length-1); i++) {
        for (var j = Math.max(col-1,0); j <= Math.min(col+1,matrix[i].length-1); j++) {
            if (!(i === row && j === col) && matrix[i][j] === '#') {
                seatCounter++;
            }
        }
    }
    return seatCounter;
}

function getNumOfOccupiedSeats(matrix) {
    return matrix.flat().filter(e => e === '#').length;
}