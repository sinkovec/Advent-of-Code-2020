module.exports = (input) => {
    return input.split('\n').reduce((sum,line) => sum + evaluate(line), 0);
};

function evaluate(expr) {
    while (expr.includes('(')) {
        // find matching )
        var counter = 1;
        var startIndex = expr.indexOf('(') + 1;
        var endIndex = startIndex;
        while (counter > 0) {
            if (expr.charAt(endIndex) === '(') {
                counter++;
            } else if (expr.charAt(endIndex) === ')') {
                counter--;
            }
            endIndex++;
        }
        expr = expr.substring(0,startIndex-1)
            + evaluate(expr.substring(startIndex,endIndex-1)) 
            + expr.substring(endIndex);
    }
    if (/(.+) \* (.+)/.test(expr)) {
        var [, left, right] = /(.+) \* (.*)/.exec(expr);
        return evaluate(left) * evaluate(right);
    } else if (/(.+) \+ (.+)/.test(expr)) {
        // eslint-disable-next-line no-redeclare
        var [, left, right] = /(.+) \+ (.+)/.exec(expr);
        return evaluate(left) + evaluate(right);
    } else {
        return parseInt(expr);
    }
    
}