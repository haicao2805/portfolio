import { INestApplication } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as i18n from 'i18n';
import { Request, Response, NextFunction } from 'express';

i18n.configure({
      locales: ['en', 'vi'],
      cookie: 'lang',
      directory: './src/util/locale/dictionaries',
      defaultLocale: 'en',
      missingKeyFn: (locale, value) => {
            console.log(locale);
            console.log(value);
            return value;
      },
});

export function router(app: INestApplication) {
      app.use(i18n.init);
      app.use(cookieParser());

      app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Methods', 'POST, GET, PUT');
            res.header('Access-Control-Allow-Headers', '*');

            const lang = req.cookies['lang'] || '';

            if (!lang) {
                  i18n.setLocale('en');
                  res.cookie('lang', 'en', { maxAge: 60 * 60 * 24 * 30 });
            } else i18n.setLocale(lang);

            next();
      });
}
