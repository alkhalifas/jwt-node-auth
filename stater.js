const statements = require('./statements.json');

exports.getRandomOne = function() {
    const totalAmount = statements.length;
    const rand = Math.floor(Math.random() * totalAmount);
    return statements[rand];
}