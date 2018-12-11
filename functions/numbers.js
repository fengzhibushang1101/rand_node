const shuffle = require('./shuffle');

module.exports = function numbers (min, max, size) {
    if (max - min + 1 > size) {
        throw new Error('size larger than population ');
    }
    const arr = Array.from({ length: max - min + 1 }, (_, idx) => idx + min);
    return shuffle(arr).slice(0, size);
};
