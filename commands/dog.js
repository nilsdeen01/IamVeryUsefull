module.exports = {
    name: 'dog',
    description: 'Displays random dog.',
    execute(message) {
        const fetch = require('node-fetch');
        const Discord = require('discord.js');
        (async () => {
            const response = await fetch('https://www.reddit.com/r/dogpictures.json');
            let json = await response.json();
            let randomNumber = Math.floor(Math.random() * json["data"]["children"].length);
            const embed = new Discord.MessageEmbed()
                .setColor('5D0CED')
                .setTitle(json["data"]["children"][randomNumber]["data"]["title"])
                .setURL("https://www.reddit.com" + json["data"]["children"][randomNumber]["data"]["permalink"])
                .setImage(json["data"]["children"][randomNumber]["data"]["url"])
                .setFooter("cute doggy stolen from r/dogpictures");
            message.channel.send(embed);
        })();
    },
};