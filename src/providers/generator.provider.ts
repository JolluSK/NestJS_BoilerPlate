import { v1 as uuid } from 'uuid';

import type { Optional } from '../types';

export class GeneratorProvider {
  static uuid(): string {
    return uuid();
  }
}
