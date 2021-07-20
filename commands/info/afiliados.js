module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "afiliados",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Afiliados")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/827290914052898816/FULL-LOGOTIPO_GEEK_GROUP.png")
    .setColor("#9900cc")
    .setDescription(`Em Configuração...`)

  message.channel.send(embed);
  }
}