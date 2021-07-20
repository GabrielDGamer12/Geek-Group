module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "pixellife",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("PixeLife")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/833899621406474260/PIXEL-AVATAR.png")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/by_pixellife`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/833899619674882048/pixel-banner.png`)

  message.channel.send(embed);
  }
}