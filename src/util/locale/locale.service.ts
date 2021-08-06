import { Dictionary } from './dictionary.type';
import * as i18n from 'i18n';
import { ResponseForClient, ResponseForDeveloper } from '../../app/interface/api.interface';

export class LocaleService {
      public translate(key: Dictionary, context?: i18n.Replacements) {
            const value = i18n.__(key, { ...context });
            return value;
      }

      public translateReponse<T>(res: ResponseForDeveloper<T>) {
            const formatApi: ResponseForClient<T> = {
                  data: res.data,
                  details: {},
            };

            if (res.details) {
                  for (const item in res.details) {
                        formatApi.details[item] = this.translate(res.details[item].type, { ...res.details[item].context });
                  }
            }
      }
}
