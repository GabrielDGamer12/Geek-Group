module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

const imgbioxs = "/bioxs.png"

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Bioxs")
    .setThumbnail("https://cdn.discordapp.com/attachments/787491838545231902/827304500502724688/bioxs.png")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de \nR$9,90/mês (Amazon Prime) \n\nhttps://www.twitch.tv/bioxs`)
    .setImage(`https://cdn.discordapp.com/attachments/787491838545231902/827304500502724688/bioxs.png`)

  message.channel.send(embed);
};