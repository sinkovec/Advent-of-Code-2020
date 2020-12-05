module.exports = (input) => {
    const data = input.split('\n').map(e => {
        var rowSearchString = e.substring(0,7);
        var columnSearchString = e.substring(7);
        return binarySearch(rowSearchString, 'F', 'B') * 8 + binarySearch(columnSearchString, 'L', 'R');
    });
    return Math.max(...data);
};

function binarySearch(searchString, lowChar, highChar) {
    var low = 0;
    var high = Math.pow(2, searchString.length) - 1;
    var mid = Math.floor(high / 2);
    for (const c of searchString) {
        if (c === lowChar) {
            high = mid;
        } else if (c === highChar) {
            low = mid + 1;
        }
        mid = low + Math.floor((high - low) / 2);
    }
    return mid;
}