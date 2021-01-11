module.exports = {
    name: 'pun',
    description: 'returns random pun.',
    execute(message) {
        const Puns = require('../addons/puns.js');
        var randPun = Math.floor(Math.random() * Math.floor(puns.length));
        message.channel.send(puns[randPun]);
    },
};