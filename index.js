const Discord = require('discord.js');
require('dotenv').config();
const config = require('./config.json');
const client = new Discord.Client();
const prefix = process.env.PREFIX;

client.once('ready', () => {
	console.log('Ready!');
});

client.login();
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);