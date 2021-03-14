module.exports = {
    name: 'help',
    description: "this command tells you the commands!",
    execute(client, message, args, Discord, moment){  

        const target = message.mentions.users.first() || message.author
        const targetmember = message.guild.members.cache.get(target.id)
        const reason = (args[1])

        const helpemebed = new Discord.MessageEmbed()

            .setAuthor(`$target.username`)
            .setTitle('Commands')
            .setDescription('These are the current commands')
            .setColor('#24a2d2')
            .setThumbnail(target.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: '*help', value: 'Displays all the commands that the bot has' },
                { name: '*mute {@name}', value: 'Mutes the person you are trying to mute :).' },
                { name: '*unmute {@name}', value: 'Unmutes the person you are trying to Unmute :).' },
                { name: '*clear {number of messages}', value: 'Clears the ammount of messages that you sepcify.' },
                { name: '*whois {mention user}', value: 'Displays information about the mentioned user.' },
                { name: '*kick {mention user} {reason}', value: 'Kicks the mentioned user for the specified reason' },
                { name: '*ban {mention user} {reason}', value: 'Bans the menioned you for the specified reason.' }
            )

        message.channel.send(helpemebed)
        console.log('Executed help command')
    }

}
