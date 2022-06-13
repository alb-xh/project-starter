import main from './main';
import { logger } from './libs';

describe('index.ts', () => {
  test('displays hello world!', () => {
    const logSpy = jest.spyOn(logger, 'log');

    main();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('info', 'Hello world!');
  })
})