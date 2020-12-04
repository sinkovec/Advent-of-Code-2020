module.exports = (input) => {
    return input.split('\n\n').map(s => s.trim()).reduce((acc,passport) => {
        const json = '{' + passport.split(/\s+/).map(s => s.split(':').map(e => `"${e}"`).join(':')).join(',') + '}';
        const data = JSON.parse(json);
        // check that no entries (except optionally 'cid') are missing
        if (Object.keys(data).length < 7) {
            return acc;
        }
        if (Object.keys(data).length === 7 && Object.keys(data).some(e => e === 'cid')) {
            return acc;
        }
        // check byr
        if (Number(data['byr']) < 1920 || Number(data['byr']) > 2002) {
            return acc;
        }
        // check iyr
        if (Number(data['iyr']) < 2010 || Number(data['iyr']) > 2020) {
            return acc;
        }
        // check eyr
        if (Number(data['eyr']) < 2020 || Number(data['eyr']) > 2030) {
            return acc;
        }
        // check hgt
        if (!data['hgt'].endsWith('in') && !data['hgt'].endsWith('cm')) {
            return acc;
        }
        const hgt = Number(data['hgt'].substring(0,data['hgt'].length-2));
        if (data['hgt'].endsWith('cm') && (hgt < 150 || hgt > 193)) {
            return acc;
        }
        if (data['hgt'].endsWith('in') && (hgt < 59 || hgt > 76)) {
            return acc;
        }
        // check hcl
        if (!/#[0-9a-f]{6}/.test(data['hcl'])) {
            return acc;
        }
        // check ecl
        if (!/(amb|blu|brn|gry|grn|hzl|oth)/.test(data['ecl'])) {
            return acc;
        }
        // check pid
        if (!/^[0-9]{9}$/.test(data['pid'])) {
            return acc;
        }
        return acc+1;
    },0);
};