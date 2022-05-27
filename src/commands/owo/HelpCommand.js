const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'owo', []);
  }

  run(client, message, args) {
    message.react("🧐")
    message.reply(`hello ${message.author}\n   this bot was created by fluffydragons.cyou#6030\n current commands:\n!help\n!upload [image embed], [name] - uploads a decal image (name is not required)\n!getlastdecal - gets the last decal uploaded by the bot\n!getsource - gets source of roblox asset (similar to x.rs)\n<https://github.com/ipwndwagons/uploaderbot>`);
  }
}