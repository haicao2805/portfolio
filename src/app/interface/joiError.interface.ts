import { Dictionary } from 'src/util/locale/dictionary.type';

export interface JoiError {
      type: Dictionary;
      context?: Record<any, any>;
}
