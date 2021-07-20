module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "jhoseph93",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Jhoseph93")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/836209087301419028/unknown.png")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/jhoseph93`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/836209117054894170/logo_discord.png`)

  message.channel.send(embed);
  }
}