const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter you weight: ', (weight) => {
        rl.question('Enter your height (in meters): ', (height) => {
            let bmi = weight / (height * height);
            console.log(`Hello ${name}, your BMI is ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
});
