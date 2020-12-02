module.exports = (input) => {
    const lines = input.split('\n');

    var result = 0;

    for (const line of lines) {
        if (!line) {
            continue;
        }
        const data = line.split(' ');

        const firstPos = Number(data[0].split('-')[0]) - 1;
        const secondPos = Number(data[0].split('-')[1]) - 1;

        const letter = data[1].charAt(0);

        const password = data[2];

        if ((password.charAt(firstPos) === letter) != (password.charAt(secondPos) === letter)) {
            result++;
        }
    }

    return result;
};