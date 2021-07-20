const express = require('express');
const app = express();
require("dotenv").config();
const fs = require("fs");

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const { prefix } = require("./config.json");

// WEBHOOK-TEST //

webhooklink = (process.env.WEBHOOK)
const hook = new Discord.WebhookClient('833908017614290964', webhooklink);

// Send a message using the webhook
hook.send('Bot Reiniciado!');

// WEBHOOK-TEST //

// Twitch Notify //

var request = require("request");
bearer_token = (process.env.bearer_token)
client_twitch = (process.env.client_twitch)

var options = { method: 'GET',
    url: 'https://api.twitch.tv/helix/streams/',
    headers:
        { 
                    "Client-ID": client_twitch,
          "Authorization": 'Bearer ' + bearer_token
            },
            qs: {
			'user_login': `annypichu`
		} }; 

var request = require("request");
bearer_token = (process.env.bearer_token)
client_twitch = (process.env.client_twitch)

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    fs.writeFile('./annypichu.csv', body, { flag: 'w' }, function(err) {
        if (err)
            return console.error(err);
        fs.readFile('./annypichu.csv', 'utf-8', function (err, data) {
            if (err)
                return console.error(err);
            console.log(JSON.parse(data));
        });
    });
});

var options1 = { method: 'GET',
    url: 'https://api.twitch.tv/helix/streams/',
    headers:
        { 
                    "Client-ID": client_twitch,
          "Authorization": 'Bearer ' + bearer_token
            },
            qs: {
			'user_login': `bioxs`
		} }; 

request(options1, function (error, response, body) {
    if (error) throw new Error(error);
    fs.writeFile('./bioxs.csv', body, { flag: 'w' }, function(err) {
        if (err)
            return console.error(err);
        fs.readFile('./bioxs.csv', 'utf-8', function (err, data) {
            if (err)
                return console.error(err);
            console.log(JSON.parse(data));
        });
    });
});

// Twitch Notify //

// webhook //
//---------//
// webhook //

// BOT-STATUS //
/*
client.on("ready", () => {
  let activities = [
      `GEEK GROUP`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        name: 'Geek Group',
        type: "STREAMING",
        url: "https://www.twitch.tv/geekgroup"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Estou Online!")
});
*/
// BOT-STATUS //

// TWITCH-NOTIFICATION //

// TWITCH-NOTIFICATION //

// WELCOME //

client.on("guildMemberAdd", async (member) => {

  let guild = await client.guilds.cache.get("735537732188897290");
  let channel = await client.channels.cache.get("735537732465590298");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você!");
  } else {
    var mention = `${member.user}`;
    let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`:wave:Bem-vindo(a)!`)
      .setDescription(`Olá **${member.user}**,  seja bem vindo, confira as regras do servidor em <#735537732465590299>!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setImage("https://cdn.discordapp.com/attachments/787491838545231902/833417507595485185/source.gif")
      .setFooter(`ID do usuário: ${member.user.id}`)
      .setTimestamp();

    channel.send(mention, embed);
  }
});

//  WELCOME

// HANDLER //
/*
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});
*/
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;
const Collection = require("discord.js");

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  });

// HANDLER //

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token