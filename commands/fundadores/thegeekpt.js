module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "thegeekpt",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("THEGEEKPT")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/834097963386667058/banner_2.jpg")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/thegeekpt`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/834097963352457216/banner.jpg`)

  message.channel.send(embed);
  }
}