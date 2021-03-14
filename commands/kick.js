const { TeamMember } = require("discord.js");

module.exports = {
    name: 'kick',
    description: "this command kicks a member!",
    aliases: ['remove', 'Remove', 'Kick'],
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],

    async execute (client, message, args, Discord, moment){    
        
        const target = message.mentions.users.first()
            let reason = (args[1])
            if (message.member.roles.cache.has('810643654788120589')) {
        if(!target) return message.reply(`You need to specify a user to kick.`)
        if(!reason) return message.reply(`You need to add a reason to kick ${target.username}.`)


        if(target, reason){
            const targetmember = message.guild.member(target)
            const kickembed = new Discord.MessageEmbed()
            .setTitle(`You were kicked from ${message.guild.name}`)
            .setDescription(`Reason: ${reason}`)
            .setTimestamp()
            .setFooter(client.user.tag)
            .setThumbnail(target.displayAvatarURL({dynamic: true}))

            const serverkickembed = new Discord.MessageEmbed()
            .setTitle(`${target.username} was kicked`)
            .setDescription(`Kicked By: ${message.author.tag}, Reason: ${reason}`)
            .setTimestamp()
            .setFooter(client.user.tag)
            .setThumbnail(target.displayAvatarURL({dynamic: true}))

        await message.channel.send(serverkickembed)

        await targetmember.send(kickembed)
            
        await targetmember.kick(reason).catch(err => console.log(err))
            
        }
    } 
    }
}