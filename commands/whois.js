const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'whois',
    description: 'Displays information about the mentioned user.',
    aliases: ['wi', 'about'],
    permissions: ["SEND_MESSAGES", "MANAGE_MESSAGES"],

    async execute (client, message, args, Discord, moment){ 
        const target = message.mentions.users.first() || message.member.user

        const whoisembed = new MessageEmbed()
        
        .setTitle(`Information about ${target.username}`)
        .addField('Discord Name', `${target.username}`, true)
        .addField('Tag', `${target.discriminator}`, true)
        .addField('Joined Server Date', `${moment(target.joinedAt).format("MM-DD-YYYY [at] HH:mm")}`)
        .addField('Account Creation Date', `${moment(target.createdAt).format("MM-DD-YYYY [at] HH:mm")}`)
        .addField('Discord ID', `${target.id}`, true)
        .addField('Last Message', `${target.lastMessage}`, true)
        .addField('Bot?', `${target.bot}`, true)
        .setThumbnail(target.displayAvatarURL({dynamic: true}))
        .setColor('#CC0000')
        
        message.channel.send(whoisembed).catch(err => console.log(err))
    }
}