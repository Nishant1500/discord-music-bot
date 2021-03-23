const { MessageEmbed } = require("discord.js");
//discord.com/oauth2/authorize?client_id=699130967100620820&permissions=37080128&scope=bot
module.exports = {
  info: {
    name: "servers",
    description: "Shows How Many Server The Bot Is In Right Now",
    usage: "[servers]",
    aliases: ["sers"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 8;
    
    let invite = new MessageEmbed()
    .setTitle(`Server Count`)
    .setDescription(`Shows The Server Count Bee Music Is in`)
    .addField('Count', `${client.guilds.cache.size}`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
