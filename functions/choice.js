const int = require('./int');

module.exports = function choice (arr) {
    return arr[int(0, arr.length)];
};
