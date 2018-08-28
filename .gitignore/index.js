const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('NDgzNzQzNDIyNjM3NjcwNDEx.DmX_5g.5jWGSYwTiBrqJqsR19_jnYBMaL8');

bot.on('message', message => {
	if (message.content != '<@368050653118988292> :eyes:  :fire: :100: :fire: Mathraining :100: :fire: :100: :eyes:'){
		msg = message.content.toLowerCase();
    if (msg.includes('mathraining') || msg.includes(' mt') || msg.includes('mt ') || msg.includes('matrain')){
    message.channel.sendMessage('<@368050653118988292> :eyes:  :fire: :100: :fire: Mathraining :100: :fire: :100: :eyes:');
	}}
});