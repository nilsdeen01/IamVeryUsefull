module.exports = {
    name: 'animequiz',
    description: 'starts anime quiz',
    execute(message) {
        const Discord = require('discord.js');
        const quiz = require('../addons/anime.json');
        const item = quiz[Math.floor(Math.random() * quiz.length)];

        const filter = response => {
            console.log(item.answers);
            if (item.answers.toLocaleLowerCase() === response.content.toLowerCase()) {
                return item.answers;
            }
        };

        //creating the embed
        const embed = new Discord.MessageEmbed()
            .setColor('5D0CED')
            .setTitle("Guess the name of the anime character!")
            .setImage(item.image)
            .setDescription('first letter is: ' + item.answers[0]);
            // sending the embed
        message.channel.send(embed).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} got the correct answer!, one internet point to you!`);
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
        });

    },
};