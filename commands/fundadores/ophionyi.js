module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "ophionyi",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("OphionYi")
    .setThumbnail("https://cdn.discordapp.com/attachments/833738104728190977/833738259875889233/LOGO-RGB.png")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/ophionyi`)
    .setImage(`https://cdn.discordapp.com/attachments/833738104728190977/833738274379530280/Banner.png`)

  message.channel.send(embed);
  }
}