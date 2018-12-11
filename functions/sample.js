const shuffle = require('./shuffle');

module.exports = function sample (arr, length) {
    return shuffle(arr).slice(0, length);
};
