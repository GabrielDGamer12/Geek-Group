module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
  name : "fundadores",
  run : async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .addField("**▬▬▬▬▬▬▬▬ Fundadores: ▬▬▬▬▬▬▬**","ㅤ")
    .addField("**GamersDrunk:**","SunTzuBR03 e SteffKirita do xbox one, \nestamos na área pra jogarmos por hobby \ne beber por amor, cola com as nossas \ntransmissões, venham nos conhecer melhor!\n**+gamersdrunk**\nㅤ")
    .addField("THEGEEKPT:","Seja todos muito bem vindos! a nossa pagina \nonde vamos jogar ,ter uma boa conversa \ne dar muita risada , fico feliz de poder \ndividir estes momentos com vocês!\n**+thegeekpt**\nㅤ")
    .addField("MisClaire_:","Meu nome é Julia, mas podem me chamar de Claire! \nMulher trans e gamer desde a infância, sou apaixonada \npor jogos de terror (apesar de levar muitos sustos kkkk), \nbattle royale, e muitos outros.Melhores momentos das \nlives vão para o YouTube.Meu Instagram: @martinsg_julia**\n+misclaire\n**ㅤ")
    .addField("Uelitrao_:","Sejam todos bem vindos ao meu canal na Twitch, \naqui farei lives quase todos os dias de diversos \njogos de FPS, ultimamente de Valorant. \nTambém tenho meu lado músico, e toda sexta-feira \nvou pegar o violão ou a guitarra pra fazer um som =D\n**+ueltriao**\nㅤ")
    .addField("OphionYi:","Olá, meu nome é Vinicius, criei este canal para mostrar \njogos que fizeram (e fazem) parte da minha vida. \nNão se iluda, eu não jogo bem, aqui é pra jogar por \ndiversão, fazer amizades e conhecer jogos diversos! \nSeja bem vindo, confere aí e vem bater um papo comigo!\n**+ophionyi**\nㅤ")
    .addField("annypichu:","Hellow! Essa live é um resumo de nada que faz \nsentido, live para maiores de 18 e use fones!\n**+annypichu**\nㅤ")
    .addField("Jhoseph93:","Seja bem vindo ao meu canal, meu nome é Jhoseph \neu sou um introvertido se aventurando no mundo \ndas streams, aqui você é livre pra conversar, desabafar, \ninteragir durante a live ou assistir tranquilo após \num dia cansativo, o foco do canal são os RPGS \ne jogos de LUTA, e oque mais der vontade de jogar\n**+jhoseph93**\nㅤ")
    .addField("GreeneLih:","Oioi, sou a Lih. Faço lives de dbd, lol e futuramente \noutros jogos. Você sente que o game te completa? \nBecause I play to feel complete ^-^\n**+greenelih**\n")    
    .addField("ㅤ","**▬▬▬▬▬▬▬▬ Fundadores: ▬▬▬▬▬▬▬**")    
    .setColor("#9900cc")

  message.channel.send(embed);
  }
}