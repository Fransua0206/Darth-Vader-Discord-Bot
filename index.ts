import DiscordJS, { Intents } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

client.on('ready', () => {
    new WOKCommands(client, {
        typeScript: true,
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        showWarns: true,
        defaultLanguage: 'english',
        ignoreBots: false,
        ephemeral: false,
        testServers: ['896225794832076840'],
        botOwners: ['575314344326332426'],
        mongoUri: process.env.DISCORD_BOT_MONGO_URI,
        debug: false
    })
    .setCategorySettings([
        {
            name: 'Moderation',
            emoji: '896232699981881384',
            customEmoji: true
        }
    ])
})

client.login(process.env.DISCORD_BOT_TOKEN)