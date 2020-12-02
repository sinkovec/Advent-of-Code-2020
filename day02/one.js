module.exports = (input) => {
    const lines = input.split('\n');

    var result = 0;

    for (const line of lines) {
        if (!line) {
            continue;
        }
        const data = line.split(' ');

        const min = Number(data[0].split('-')[0]);
        const max = Number(data[0].split('-')[1]);

        const letter = data[1].charAt(0);

        const password = data[2];

        var counter = 0;

        for (var i = 0; i < password.length; i++) {
            if (password.charAt(i) === letter) {
                counter++;
            }
        }

        if (min <= counter && counter <= max) {
            result++;
        }
    }

    return result;
};