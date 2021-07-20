const snekfetch = require('snekfetch');

require('dotenv');

const streamer = 'annypichu';

const api = `https://api.twitch.tv/helix/streams/${streamer}?client_id=${process.env.twitch_client}`;
  var canal = message.guild.channels.cache.find(ch => ch.id === "825951578225639434");

  snekfetch.get(api).then(r => {
    if (r.body.stream === null) {
      setInterval(() => {
        snekfetch.get(api).then(console.log(r.body))
      }, 30000); // Set to 30 seconds, less than this causes 'node socket hang up'
    } else {
      const embed = new Discord.RichEmbed()
        .setAuthor(
        `${r.body.stream.channel.display_name} is live on Twitch`,
        `${r.body.stream.channel.logo}`,
        `${r.body.stream.channel.url}`
      )
        .addField('Stream Title', `${r.body.stream.channel.status}`, true)
        .addField('Playing', `${r.body.stream.channel.game}`, true)
        .addField('Followers', `${r.body.stream.channel.followers}`, true)
        .addField('Views', `${r.body.stream.channel.views}`, true)
        .setImage(r.body.stream.preview.large)

      return guild.channels.get(canal.id).send({ embed });
    }
  });