import { Command } from 'commander';

import { Logger } from '@libs';

import { nodeVersionOption } from './options';
import {
  nodeVersionAction,
  installYarnAction,
} from './actions';

export default () => new Command()
  .command('node <project-name>')
  .description('Creates a node project')
  .addOption(nodeVersionOption())
  .action((projectName, options) => {
    Logger.info(projectName);
    Logger.info(options);

    const { nodeVersion } = options;

    if (nodeVersion) {
      nodeVersionAction(nodeVersion);
    }

    installYarnAction();
  });
