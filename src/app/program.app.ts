import { Command } from 'commander';

export default (commands: Command[]) => {
  // TODO: add version
  const program = new Command()
    .name('project-starter')
    .description('CLI to spin up new projects with cool standarts');

  commands.forEach((command: Command) => {
    program.addCommand(command);
  });

  return program;
};
