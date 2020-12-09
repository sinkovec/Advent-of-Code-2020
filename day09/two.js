module.exports = (input, preambleLength=25) => {
    var numbers = input.split('\n').map(Number);

    var getInvalidNumberAndPosition = () => {
        outer:
        for (var i = preambleLength; i < numbers.length; i++) {
            for (var j = i - preambleLength; j < i - 1; j++) {
                for (var k = j + 1; k < i; k++) {
                    if (numbers[j] + numbers[k] === numbers[i]) {
                        continue outer;
                    }
                }
            }
            return [numbers[i], i];
        }
    };

    var [invalidNumber, position] = getInvalidNumberAndPosition();
    

    for (var i = 0; i < position - 1; i++) {
        for (var j = i + 1; j < position; j++) {
            var sum = 0;
            var min = Number.MAX_VALUE;
            var max = 0;
            for (var k = i; k <= j; k++) {
                sum += numbers[k];
                min = Math.min(numbers[k], min);
                max = Math.max(numbers[k], max); 
            }
            if (sum === invalidNumber) {
                return min + max;
            }
        }
    }
};