module.exports = {
    name: 'insult',
    description: 'insults a person',
    execute(message) {
            const fetch = require('node-fetch');
            (async () => {
                const response = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json');
                let json = await response.json();
                message.channel.send(json.insult);
            })();

        // message.channel.send("Command disabled");
    },
};

