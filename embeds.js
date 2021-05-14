client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if(command === 'command'){
 let embed = new Discord.MessageEmbed()
.setTitle(`Title`)
.setDescription(`Description Text`)
.setColor(`Color Tag`)

message.channel.send(embed).then(m => {
m.react('Reaction emoji') \\ DONT USE THE TAG LIKE :sunglasses: USE THE ORIGINAL EMOJI
})
  }
});
