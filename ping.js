module.exports = 
{
    name: 'ping',
    description: "This is a ping command!",
    execute(message, args)
    {
        if (message.author.id === "*Enter user ID*") //This will allow you to have commands only for you The beginning to privilidge escalation.
        {
            message.channel.send('pong');
        }
        /*
        if (message.member.roles.cache.has('*Enter the role that which you want, can be seen on server.*'))
        {
            message.channel.send('pong!');
        }
        else
        {
            message.channel.send('Get better permissions.');
            message.channel.send('Come back when you are better.');
        }
        */
    }

}
