module.exports = (input) => {
    const seatIDs = input.split('\n')
        .map(e => parseInt(e.replace(/F|L/g,0).replace(/B|R/g,1),2))
        .sort((a,b) => a - b);

    for (var i = 1; i < seatIDs.length - 1; i++) {
        if (seatIDs[i]+2 == seatIDs[i+1]) {
            return seatIDs[i]+1;
        }
    }
};