module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "dev",
  aliases : ["desenvolvedor"],
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Desenvolvedor")
    .setThumbnail("https://cdn.discordapp.com/attachments/787491838545231902/833738674716803123/Arte_de_Canal.jpg")
    .setColor("#9900cc")
    .setDescription(`**Desenvolvido Por GabrielDGamer.** \n\n**Instagram**: https://www.instagram.com/gabrieldgamer_/\n**Youtube**: https://youtube.com/c/gabrieldgamer\n**Twitch**: https://www.twitch.tv/gabrieldgamer_\n\n Caso encontre algum erro no bot <@827290995502350336>, envie uma mensagem para <@737039257709051925>\n\n**Código Aberto**\nhttps://replit.com/@GabrielDGamer/Geek-Group`)

  message.channel.send(embed);
  }
}