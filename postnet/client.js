const request = require('request');
let readlineSync = require('readline-sync');

console.log('Welcome!');

function translate(code) {
    const option = {
        url: "http://localhost:3002/result",
        method: "GET",
        json: true,
        body: {'code': code}
    };
    request(option, function (error, response, body) {
        // console.log(error);
        console.log(body);
        getInput();
    });
}

function getInput() {
    let code = readlineSync.question('请输入code:');
    translate(code);
}
getInput();
