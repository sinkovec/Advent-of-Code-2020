module.exports = (input) => {
    return Math.max(...input.split('\n').map(e => parseInt(e.replace(/F|L/g,0).replace(/B|R/g,1),2)));
};