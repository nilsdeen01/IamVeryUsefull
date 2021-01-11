module.exports = {
    name: 'mute',
    description: 'Display bot info.',
    execute(message) {
        let targetMember = message.mentions.members.first();
        if (targetMember) {
            if (message.author.id == '145620871942242304') {
                message.channel.send("invalid permissions! this incident will be reported...");
            } else {
                message.channel.send("User muted!")
            }
        } else{
            message.channel.send("Name someone to mute: ++mute @irretatingperson");
        }
    },
};