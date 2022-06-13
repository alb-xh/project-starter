import { Command } from 'commander';

export default (commands: Array<(program: Command) => Command>) => {
  // TODO: add version
  const program = new Command()
    .name('project-starter')
    .description('CLI to spin up new projects with cool standarts');

  commands.forEach((command) => {
    command(program);
  });

  return program;
};
