module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "uelitrao_",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Welitrao_")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/833432749385842738/avatar_discord.png")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/uelitrao_`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/833432750543208508/WhatsApp_Image_2021-04-10_at_15.55.12.jpeg`)

  message.channel.send(embed);
  }
}