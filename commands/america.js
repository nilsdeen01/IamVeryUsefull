module.exports = {
    name: 'america',
    description: 'test command',
    execute(message) {
        const Canvas = require('canvas');
        const Discord = require("discord.js");
        let targetMember = message.mentions.members.first();
        if (targetMember) {
            
            (async () => {
    
                const canvas = Canvas.createCanvas(600, 350);
                const ctx = canvas.getContext('2d');
    
                const background = await Canvas.loadImage('./assets/img/american_flag2.JPG');
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
                ctx.strokeStyle = '#74037b';
                ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
                ctx.beginPath();
                ctx.arc(300, 175, 100, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
    
                const avatar = await Canvas.loadImage(targetMember.user.displayAvatarURL({ format: 'jpg' }));
                ctx.drawImage(avatar, 200, 75, 200, 200);
    
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    
                message.channel.send(attachment);
            })();
        } else{
            message.channel.send("Mention a user: ++america @username")
        }
    },
};
