module.exports = (input) => {
    var busIDs = input.split('\n')[1]
        .split(',')
        .map((x,i) => [x,i])
        .filter(x => x[0] !== 'x')
        .map(x => [BigInt(x[0]), BigInt(x[1])]);
    
    var M = busIDs.map(x => x[0]).reduce((p,x) => p*x);
    return Number(busIDs.reduce((sum,x) => sum + ((x[0]-x[1]) * M / x[0] * modInverse(M / x[0], x[0])), BigInt(0)) % M);
};

function modInverse(a, b) {
    a %= b;
    for (var x = BigInt(1); x < b; x++) {
        if ((a*x)%b == 1) {
            return x;
        }
    }
}