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
    var numOfOccupiedSeats = countOccupiedSeatsInSight(matrix, i, j);
    if (matrix[i][j] === 'L' && numOfOccupiedSeats === 0) {
        return '#';
    }
    if (matrix[i][j] === '#' && numOfOccupiedSeats >= 5) {
        return 'L';
    }
    return matrix[i][j];
}

function countOccupiedSeatsInSight(matrix, row, col) {
    var seatCounter = 0;
    var i, j;
    // count vertical seats
    for (i = row+1; i < matrix.length; i++) {
        if (matrix[i][col] === '#') {
            seatCounter++;
            break;
        } else if (matrix[i][col] === 'L') {
            break;
        }
    }
    for (i = row-1; i >= 0; i--) {
        if (matrix[i][col] === '#') {
            seatCounter++;
            break;
        } else if (matrix[i][col] === 'L') {
            break;
        }
    }
    // count horizontal seats
    for (i = col+1; i < matrix.length; i++) {
        if (matrix[row][i] === '#') {
            seatCounter++;
            break;
        } else if (matrix[row][i] === 'L') {
            break;
        }
    }
    for (i = col-1; i >= 0; i--) {
        if (matrix[row][i] === '#') {
            seatCounter++;
            break;
        } else if (matrix[row][i] === 'L') {
            break;
        }
    }
    // count diagonal seats
    for (i = row+1, j = col+1; i < matrix.length && j < matrix.length; i++, j++) {
        if (matrix[i][j] === '#') {
            seatCounter++;
            break;
        } else if (matrix[i][j] === 'L') {
            break;
        }
    }
    for (i = row+1, j = col-1; i < matrix.length && j >= 0; i++, j--) {
        if (matrix[i][j] === '#') {
            seatCounter++;
            break;
        } else if (matrix[i][j] === 'L') {
            break;
        }
    }
    for (i = row-1, j = col+1; i >= 0 && j < matrix.length; i--, j++) {
        if (matrix[i][j] === '#') {
            seatCounter++;
            break;
        } else if (matrix[i][j] === 'L') {
            break;
        }
    }
    for (i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
        if (matrix[i][j] === '#') {
            seatCounter++;
            break;
        } else if (matrix[i][j] === 'L') {
            break;
        }
    }
    return seatCounter;
}

function getNumOfOccupiedSeats(matrix) {
    return matrix.flat().filter(e => e === '#').length;
}