const Discord = require('discord.js');

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING']});

const prefix = '-';


client.once('ready', () => {
    console.log('Hamburger is Online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ceasarino'){
        message.channel.send('SHIIIIIIIIIIIIIIIIIIIIIIIZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        
    }else if (command == 'sup'){
        message.channel.send('sup men')

    }else if (command == 'hamburger'){
        message.channel.send('nice men same')

    }else if (command == 'hambaguette'){
        message.channel.send('holy jesus take my money')

    }else if (command == 'cheese'){
        message.channel.send('indeed')

    }else if (command == 'yomama'){
        message.channel.send('yo mama so fat she got exponents on the weight scale')

    }else if (command == 'roast'){
        message.channel.send('ooooooooOOOOOOOOOOoOOOooOOOh')
        
    }else if (command == 'die'){
        message.channel.send('you were squashed by ur mom falling from heaven')
        
    }else if (command == 'f'){
        message.channel.send('rip 1969-2420 he was squashed by his mom')
        
    }else if (command == 'dum'){
        message.channel.send('yes u is stupid now go away u no have hamburger')

    }else if (command == 'birb'){
        message.channel.send('nice men birb supremacy take this feathre')
        
    }else if (command == 'play'){
        message.channel.send('i not radio men u expect me to play music u stupid')
        
    }else if (command == 'boblox'){
        message.channel.send('that place where kids go reeeee and rage quit')
        
    }else if (command == 'minecraft'){
        message.channel.send('ah yes the game for chads')
        
    }else if (command == 'jojo'){
        message.channel.send('"hey is it that tiktok dance? -dead person"')
        
    }else if (command == 'starplatinum'){
        message.channel.send('ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        
    }else if (command == 'zawardo'){
        message.channel.send('ROADA ROLLER DA!1!1!!1 MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUDA MUdA')
        
    }else if (command == 'kekyoin'){
        message.channel.send('hey men kakyoin isnt a donut flavor pick from the menu')
        
    }else if (command == 'emerald'){
        message.channel.send('fucking hacker he deflected the emerald splash')
        
    }else if (command == 'timestop'){
        message.channel.send('TOMARI TOKIYOOOOOOOOOOO')
        
    }else if (command == 'winning'){
        message.channel.send('are ya winning men')
        
    }else if (command == 'coinflip'){
        message.channel.send('dafuck wat u asking me for stupid')
    }
        
         

    
});

bot.login(process.env.token);