module.exports = {
    name: 'birdarms',
    description: 'Displays image from r/birdarms sub.',
    execute(message) {
        const fetch = require('node-fetch');
        const Discord = require('discord.js');
        (async () => {
            const response = await fetch('https://www.reddit.com/r/birdswitharms.json');
            let json = await response.json();
            let randomNumber = Math.floor(Math.random() * json["data"]["children"].length);
            const embed = new Discord.MessageEmbed()
                .setColor('5D0CED')
                .setTitle(json["data"]["children"][randomNumber]["data"]["title"])
                .setURL("https://www.reddit.com" + json["data"]["children"][randomNumber]["data"]["permalink"])
                .setImage(json["data"]["children"][randomNumber]["data"]["url"])
                .setFooter("From: r/birdswitharms");
            message.channel.send(embed);
        })();
    },
};