import { isProductionEnv } from '@helpers';
import { Logger } from '@libs';

import program from './program.app';
import { node } from './commands';

export default async (args: string[], env?: string) => {
  try {
    const app = program()
      .addCommand(node());

    await app.parseAsync(args);

    return 0;
  } catch (error: any) {
    if (!isProductionEnv(env)) {
      throw error;
    }

    Logger.error(error.message || 'Something went wrong!');

    return 1;
  }
};
