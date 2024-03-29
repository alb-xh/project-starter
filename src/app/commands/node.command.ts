import { Command } from 'commander';

export default () => new Command()
  .command('node <project-name>')
  .description('Creates a node project')
  .option('--typescript', 'typescript enable', true)
  .action(async (name, options) => {
    console.log('Initiate project!');
    console.log(name);
    console.log(options);
  });
