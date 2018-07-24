const Discord = require("discord.js");
const client = new Discord.Client();
console.log('ready');
client.user.setPresence({
  status: 'dnd',
 game: { 
    type: 1,
    name: 'a7a',
     details: `client.on('message', message =>`,
     url: 'https://www.twitch.tv/skwadraa',
       

  }
    });
});
      })
const Slam = [
  'هلا بيك',
  'cracking will sleeping :)',
  'Kiki Do u love me',
  'spam 24H',
  'مولع خيو', 
  'بللحححح', 
  'سبااااااااااااااااااااااااام يا حبيبى',
  'هيييييييييح',
  'تفجير كريديت',
  'تفجير لفيل'
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
