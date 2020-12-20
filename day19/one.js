module.exports = (input) => {
    var [prod, words] = input.split('\n\n');

    prod = prod.split('\n').map(line => line.split(': ')).reduce((map,[num,rule]) => {
        num = parseInt(num);
        if (rule.startsWith('"')) {
            rule = /"(\w)"/.exec(rule)[1];
        } else {
            rule = rule.split(' | ').map(e => e.split(' ').map(Number));
        }
        map[parseInt(num)] = rule;
        return map;
    }, {});

    return words.split('\n').reduce((sum,w) => {
        var M = pre_star(prod, w);
        var acc = M.has(`[0,${w.length},0]`) ? 1 : 0;
        return sum + acc;
    }, 0);
};

function pre_star(prod, w) {
    var n = w.length;
    var M = new Set(Array.from({length : n}, (v,i) => `[${i},${i+1},${w.charAt(i)}]`));
    
    do {
        var oldSize = M.size;
        for (const [A,prods] of Object.entries(prod)) {
            for (const beta of prods) {
                for (var q = 0; q <= n; q++) {                    
                    const P = getPaths(M,q,beta);
                    for (const p of P) {
                        M.add(`[${q},${p},${A}]`);   
                    }
                }
            }
        }

    } while (oldSize !== M.size);
    return M;
}

function getPaths(M, q, beta) {
    var Q = new Set([q]);
    for (const N of beta) {
        if (Q.size === 0) {
            break;
        }
        const newQ = new Set();
        for (const state of Q) {
            const regex = new RegExp(`\\[${state},\\d+,${N}\\]`);
            const P = Array.from(M).filter(t => regex.test(t)).map(t => t.split(',')[1]).map(Number);
            if (P.length > 0) {
                P.forEach(e => newQ.add(e));
            }
        }
        Q = newQ;
    }
    return Q;
}