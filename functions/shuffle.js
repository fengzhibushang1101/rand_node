const int = require('./int');

module.exports = function shuffle (arr) {
    const copy = [...arr];
    copy.forEach((i, idx) => {
        const tar = int(0, arr.length - 1);
        [copy[idx], copy[tar]] = [copy[tar], copy[idx]];
    });
    return copy;
};
