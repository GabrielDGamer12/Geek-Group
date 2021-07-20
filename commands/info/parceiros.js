module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "parceiros",
  run : async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .addField("**▬▬▬▬▬▬▬▬ Parceiros: ▬▬▬▬▬▬▬▬**", "ㅤ",false)
    .addField("**Bioxs:**","Eu mesmo, Bioxs!ㅤㅤ\n**+bioxs**\nㅤ")
    .addField("by_pixellife:","Bem-vindxs a PixelLife! Criei esse canal \nporque estava me sentindo muito sozinha \nnessa quarentena. Faço lives quase todos \nos dias a partir das 23h, se você se sente \nsozinho também, vem papear comigo. 💜💜💜\n**+pixellife**\n")
    .addField("ㅤ","**▬▬▬▬▬▬▬▬ Parceiros: ▬▬▬▬▬▬▬▬**")
    .setColor("#9900cc")

  message.channel.send(embed);
  }
} 