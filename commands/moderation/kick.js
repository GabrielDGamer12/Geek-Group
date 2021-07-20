const Discord = require("discord.js")

module.exports = {
  name : "kick",  
  run : (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  message.delete()
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`).then(msg => msg.delete({timeout: 10000}))

    var motivo = args.slice(1).join(" ");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Desculpe, mas você não tem permissão para isso.').then(msg => msg.delete({timeout: 10000}))
    if (!motivo) return message.channel.send(`Formato inválido. Formato correto: **+kick @usario motivo.**`).then(msg => msg.delete({timeout: 10000}))
        
        let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
        var canal = message.guild.channels.cache.find(ch => ch.id === "842318425782485022");
        message.channel.send(`Deseja realmente expulsar  ${user}? clique no emoji para confirmar.`).then(msg => {
        msg.react("👍")
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
          msg.delete({timeout: 100});
          cp.remove(message.author.id); {
            let kickmessage = message.channel
    .send(`${message.author}, ${user} foi expulso.` ).then(msg => msg.delete({timeout: 10000})) 
          }
            membro.kick(motivo);
        })
    })}
   }