module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "gamersdrunk",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("GamersDrunk")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/834125996683952138/20210420_113042.jpg")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/gamersdrunk`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/834125994037346344/20210420_143042.jpg`)

  message.channel.send(embed);
  }
}