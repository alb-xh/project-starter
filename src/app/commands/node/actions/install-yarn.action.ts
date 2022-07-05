import shell from 'shelljs';

import { Logger } from '@libs';

export default () => {
  const yarnVersionRes = shell.exec('yarn -v');
  Logger.debug(yarnVersionRes);

  if (yarnVersionRes.stderr) {
    const yarnInstallRes = shell.exec('npm i -g yarn');
    Logger.debug(yarnInstallRes);

    if (yarnInstallRes.stderr) {
      throw new Error(yarnInstallRes.stderr);
    }
  }
};
