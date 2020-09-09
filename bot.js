const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity(" Deleted | Made by Dantdmnl#8037", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === 'hot') {
	  msg.channel.send(`No u.`)
  }
  if (msg.content === 'creator') {
	  msg.channel.send(`someone`)
  }
  if (msg.content === 'lol') {
	  msg.channel.send(`no`)
  }
  if (msg.content === 'test') {
	  msg.channel.send(`123`)
  }
  if (msg.content === 'bot') {
	  msg.channel.send(`no u`)
  }
  if (msg.content === 'gay') {
	  msg.channel.send(`no u`)
  }
});

client.login(tokens.token);
