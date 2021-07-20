module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "greene",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("GreeneLih")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/838835280269279313/20210429_223457.jpg")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/greenelih`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/838835279901098004/img_capaface.jpg`)

  message.channel.send(embed);
  }
}