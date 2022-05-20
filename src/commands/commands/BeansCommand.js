const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BeansCommand extends BaseCommand {
  constructor() {
    super('beans', 'commands', []);
  }

  run(client, message, args) {
    message.channel.send('beans command works');
  }
}