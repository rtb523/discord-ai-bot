const Discord = require('discord.js');
require('dotenv').config();
const config = require('./config.json');
const client = new Discord.Client();
const prefix = process.env.PREFIX;

client.once('ready', () => {
	console.log('Ready!');
});

client.login();
