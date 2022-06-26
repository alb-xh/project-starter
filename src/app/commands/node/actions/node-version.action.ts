import path from 'path';

import shell from 'shelljs';
import semver from 'semver';

import { Logger } from '@libs';

export default (versionNumber: string) => {
  if (!semver.valid(versionNumber)) {
    throw new Error('Version should follow semver!');
  }

  if (!process.env.NVM_DIR) {
    throw new Error('NVM is not installed!');
  }

  const NVM_PATH = path.join(process.env.NVM_DIR, 'nvm.sh');
  const res = shell.exec(`. ${NVM_PATH} && nvm use`);
  Logger.debug(res);

  if (res.stderr) {
    throw new Error(res.stderr);
  }
};
