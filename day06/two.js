module.exports = (input) => {
    return input.split('\n\n').reduce((sum,group) => {
        var answers = group.split('\n').map(s => new Set(s));
        return sum + answers.reduce((acc,set) => intersection(acc,set), answers[0]).size;
    }, 0);
};

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}