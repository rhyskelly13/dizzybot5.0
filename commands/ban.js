module.exports = {
    name: 'ban',
    description: "this command bans a member!",
    aliases: ['Ban'],
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],

    async execute (client, message, args, Discord, moment){ 
        
        const target = message.mentions.users.first()
            let reason = (args[1])
        if(!target) return message.reply(`You need to specify a user to ban.`)
        if(!reason) return message.reply(`You need to add a reason to ban ${target.username}.`)
        if (message.member.roles.cache.has('810643654788120589')) {


        if(target, reason){
            const targetmember = message.guild.members.cache.get(target.id)
            const banembed = new Discord.MessageEmbed()
            .setTitle(`You were banned from ${message.guild.name}`)
            .setDescription(`Reason: ${reason}`)
            .setTimestamp()
            .setFooter(client.user.tag)
            .setThumbnail(target.displayAvatarURL({dynamic: true}))

            const serverbanembed = new Discord.MessageEmbed()
            .setTitle(`${target.username} was banned`)
            .setDescription(`Reason: ${reason}`)
            .setTimestamp()
            .setFooter(client.user.tag)
            .setThumbnail(target.displayAvatarURL({dynamic: true}))

        await message.channel.send(serverbanembed)

        await targetmember.send(banembed)
            
        await targetmember.ban({days: 0, reason: `${reason}`}).catch(err => console.log(err))
            
        }
    } 
    }
}