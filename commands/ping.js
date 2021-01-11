module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message) {
        message.channel.send(message.createdTimestamp - new Date().getTime() + " ms");
    },
};