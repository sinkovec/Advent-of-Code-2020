module.exports = (input) => {
    return input.split('\n\n').map(s => s.trim()).reduce((acc,passport) => {
        const data = passport.split(/\s+/);
        if (data.length === 8 || (data.length === 7 && data.every(e => !e.startsWith('cid')))) {
            return acc+1;
        } else {
            return acc;
        }
    },0);
};