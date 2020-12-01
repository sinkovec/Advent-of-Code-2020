let fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input');

const nums = fs.readFileSync(filePath)
               .toString()
               .split('\n')
               .map(Number);

for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
        for (let k = j+1; k < nums.length; k++) {
            if (nums[i] + nums[j] + nums[k] == 2020) {
                console.log(nums[i] * nums[j] * nums[k])
            }
        }
    }
}