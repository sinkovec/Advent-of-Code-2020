module.exports = (input) => {
    return input.split('\n')
        .reduce((sum,line) => 
            sum + evaluate([...line].reverse().join('').replace(/\(/g,'[').replace(/\)/g,'(').replace(/\[/g,')'))
        , 0);
};

function evaluate(expr) {
    if (expr.startsWith('(')) {
        // find matching )
        var counter = 1;
        var index = 0;
        while (counter > 0) {
            index++;
            if (expr.charAt(index) === '(') {
                counter++;
            } else if (expr.charAt(index) === ')') {
                counter--;
            }
        }
        expr = evaluate(expr.substring(1,index)) + expr.substring(index+1);
    } 
    if (/(\d+) (\+|\*) (.*)/.test(expr)) {
        var [, num, op, rem] = /(\d+) (\+|\*) (.*)/.exec(expr);
        if (op === '+') {
            return +num + evaluate(rem);
        } else {
            return +num * evaluate(rem);
        }
    } else {
        return parseInt(expr);
    }
    
}