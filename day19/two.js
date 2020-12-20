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

    prod[8] = [[42], [42, 8]];
    prod[11] = [[42, 31], [42, 11, 31]];

    return words.split('\n').reduce((sum,w) => {
        var M = pre_star(prod, w);
        var acc = M.get(0).has(0) ? M.get(0).get(0).has(w.length) ? 1 : 0 : 0;
        return sum + acc;
    }, 0);
};

function pre_star(prod, w) {
    var n = w.length;
    var M = new Map(Array.from({length : n}, (v,i) => [i, new Map([[w.charAt(i), new Set([i+1])]])]));

    do {
        var oldSize = getSize(M);
        for (const [A,prods] of Object.entries(prod)) {
            for (const beta of prods) {
                for (var q = 0; q < n; q++) {                    
                    const P = getPaths(M,q,beta);
                    for (const p of P) {
                        if (!M.get(q).has(+A)) {
                            M.get(q).set(+A, new Set());
                        }
                        M.get(q).get(+A).add(p); 
                    }
                }
            }
        }

    } while (oldSize !== getSize(M));
    return M;
}

function getSize(M) {
    var sum = 0;
    for (const a of M.values()) {
        for (const b of a.values()) {
            sum += b.size;
        }
    }
    return sum;
}

function getPaths(M, q, beta) {
    var Q = new Set([q]);
    for (const N of beta) {
        if (Q.size === 0) {
            break;
        }
        const newQ = new Set();
        for (const s of Q) {
            if (M.has(s) && M.get(s).has(N)) {
                Array.from(M.get(s).get(N)).forEach(e => newQ.add(e));
            }
        }
        Q = newQ;
    }
    return Q;
}