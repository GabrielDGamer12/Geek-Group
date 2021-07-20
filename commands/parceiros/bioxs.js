module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "bioxs",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Bioxs")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/833437221251973141/foto.png")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/bioxs`)
    .setImage(`https://cdn.discordapp.com/attachments/822884224864092212/830506587163459604/baner_centralizado.png`)

  message.channel.send(embed);
  }
}