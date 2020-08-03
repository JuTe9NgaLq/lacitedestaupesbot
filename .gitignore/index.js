const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

bot.on('message', message => {
	if (message.content != '<@196705023772721153> :eyes:  :fire: :100: :fire: Mathraining :100: :fire: :100: :eyes:'){
		msg = message.content.toLowerCase();
    if (msg.includes('mathraining') || msg.includes(' mt') || msg.includes('mt ') || msg.includes('matrain')){
    message.channel.sendMessage('<@196705023772721153> :eyes:  :fire: :100: :fire: Mathraining :100: :fire: :100: :eyes:');
	}}
		
});
