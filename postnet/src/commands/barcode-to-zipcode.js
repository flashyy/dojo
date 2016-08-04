let {braCodeToZipCode} = require('../main');

module.exports = function (barcode) {
    let zipcode = braCodeToZipCode(barcode)
    if (zipcode === false) {
        return {
            error: 'Please give right input'
        }
    } else {
        return {
            text: zipcode,
            reset: true
        }
    }
};