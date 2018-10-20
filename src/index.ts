import { Ycs } from '@ycs/core';
import { config } from './config';

try {
  Ycs.create(__dirname, config).start();
} catch (e) {
  console.error(e);
}
