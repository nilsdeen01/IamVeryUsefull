module.exports = {
    name: 'help',
    description: 'Display help command.',
    execute(message) {
            const { version } = require('../config.json');
            const Discord = require('discord.js');
            const embed = new Discord.MessageEmbed()
                .setColor('5D0CED')
                .setTitle('Help menu')
                .addField("++stress", "Pop some Bubble wrap")
                .addField('++pun ', 'Random pun.')
                .addField('++ping ', 'Checks the bots ping/connection.')
                .addField('++birdarms ', 'Gets a pictures of a bird with arms.')
                .addField('++dog ', 'Gets a pictures of a dog.')
                .addField('++meme ', 'Gets a meme.')
                .addField('More to be added...', "Working on it, stay tuned!")
                .setFooter('Created by D3rp, bot version: ' + version);
            message.author.send(embed);

    },
};