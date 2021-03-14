module.exports = { 
    name: 'ping',
    description: "The is a ping command",
    execute(client, message, args, Discord, moment){ 
       
        if (message.member.roles.cache.has('810643654788120589')) {
        message.channel.send('pong'); 

        } else {
             message.channel.send('Sorry but only the Founder can use this command');

        }
    
    }
}