module.exports = (input) => {
    return input.split('\n\n').reduce((sum,group) =>
        sum + new Set(group.replace(/\s/g,'')).size
    , 0);
};