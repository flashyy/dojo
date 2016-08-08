let express = require('express');
let bodyParser = require('body-parser');

let BarcodeToZipcodeTrans = require('./src/barcodetozipcodeTrans');
let ZipcodeToBarcodeTrans = require('./src/zipcodetobarcodeTrans');
let Route = require('./src/route');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function (req, res) {
//     res.sendfile('./index.html');
// });
//
// app.get('/result2', function (req, res) {
//
//     let code = req.body.code;
//     let route = new Route().handle(code);
//     res.send(route);
//
// });
app.get('/result', function (req, res) {

    let code = req.body.code;
    console.log(code);
    let barcodeTranslater = new BarcodeToZipcodeTrans();
    let typeBarcode = barcodeTranslater.checkBarcodeFormate(code);

    let zipcodeTranslater = new ZipcodeToBarcodeTrans();
    let typeZipcode = zipcodeTranslater.checkZipCodeFormate(code);

    if (typeBarcode !== false) {
        res.send('Hello GET:' + barcodeTranslater.run(code).result);
    } else if (typeZipcode !== false) {
        res.send('Hello GET:' + zipcodeTranslater.run(code).result);
    } else {
        res.send("输入错误.");
    }

});

app.listen(3002, function () {
    console.log('Example app listening on port 3002!');
});
