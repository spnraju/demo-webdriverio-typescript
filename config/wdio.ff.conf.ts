import { config as base } from './wdio.conf';

export const config = {
  ...base,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['-headless'],
      },
    },
  ],
}