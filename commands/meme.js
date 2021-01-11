module.exports = {
    name: 'meme',
    description: 'Displays random meme.',
    execute(message) {
        const fetch = require('node-fetch');
        const Discord = require('discord.js');
        (async () => {
            const response = await fetch('https://www.reddit.com/r/dankmemes.json');
            let json = await response.json();
            let randomNumber = Math.floor(Math.random() * json["data"]["children"].length);
            const embed = new Discord.MessageEmbed()
                .setColor('5D0CED')
                .setTitle(json["data"]["children"][randomNumber]["data"]["title"])
                .setDescription(
                    "👍 " + json["data"]["children"][randomNumber]["data"]["ups"] +
                    " | 💬 " + json["data"]["children"][randomNumber]["data"]["num_comments"])
                .setURL("https://www.reddit.com" + json["data"]["children"][randomNumber]["data"]["permalink"])
                .setImage(json["data"]["children"][randomNumber]["data"]["url"])
                .setFooter("Meme stolen from r/dankmemes");
            message.channel.send(embed);
        })();
    },
};