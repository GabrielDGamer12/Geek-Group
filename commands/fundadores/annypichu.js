module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "annypichu",
  run : async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("AnnyPichu")
    .setThumbnail("https://cdn.discordapp.com/attachments/788661572407001108/833432764581675030/icone1.jpg")
    .setColor("#9900cc")
    .setDescription(`Valor na Twitch: A partir de R$9,90/mês\n(Amazon Prime)! \n\nhttps://www.twitch.tv/annypichu`)
    .setImage(`https://cdn.discordapp.com/attachments/788661572407001108/833432760197840927/WhatsApp_Image_2021-04-10_at_15.36.17.jpeg`)

  message.channel.send(embed);
  }
}