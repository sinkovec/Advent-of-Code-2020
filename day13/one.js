module.exports = (input) => {
    var lines = input.split('\n');
    var timestamp = Number(lines[0]);
    var busIDs = lines[1].split(',').filter(x => x !== 'x').map(Number);
    return busIDs.map(x => [x, (Math.floor(timestamp / x) + 1) * x - timestamp])
        .reduce((acc,current) => current[1] < acc[1] ? current : acc)
        .reduce((busID,waitingTime) => busID * waitingTime);
};