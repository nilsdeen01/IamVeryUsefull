module.exports = {
    name: 'serverinfo',
    description: 'Display server info.',
    guildOnly: true,
    execute(message) {
        if (message.channel.type === 'dm') {
            message.channel.send("This command only works in servers!");
            return;
        }

        const { version } = require('../config.json');
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor('5D0CED')
            .setTitle('Server info')

            .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))


            .addFields(
                { name: 'Server Name:', value: message.guild.name },
                { name: '\u200B', value: '\u200B' },
                { name: 'Server Owner: ', value: `<@${message.guild.ownerID}>`, inline: true },
                { name: 'User count:', value: message.guild.memberCount, inline: true },
                { name: '\u200B', value: '\u200B' },
            )

            
            .setFooter('Created by D3rp, bot version: ' + version);
        message.channel.send(embed);
    },
};  