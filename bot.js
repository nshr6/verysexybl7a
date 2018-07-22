const Discord = require("discord.js");
const client = new Discord.Client();

const Slam = [
  'هلا بيك',
  'cracking will sleeping :)',
  'Kiki Do u love me',
  'spam 24H',
  'مولع خيو', 
  'بللحححح', 
  'سبااااااااااااااااااااااااام يا حبيبى'
]

client.on('message', message => {
if (message.content === "pl7") {
  var ms = 60000;
      var interval = setInterval (function () {
        message.channel.send(`${Slam[Math.floor(Math.random() * Slam.length)]}`)
      }, ms); 
    }
});

client.login(process.env.BOT_TOKEN)
