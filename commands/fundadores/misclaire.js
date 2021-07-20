module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "misclaire",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("MisClaire_")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/833732544398753873/Perfil_novo_twitch2.jpg")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/misclaire_`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/833732545962311700/Banner_16_9.jpg`)

  message.channel.send(embed);
  }
}