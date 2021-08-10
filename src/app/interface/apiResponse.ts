import {
      BadGatewayException,
      BadRequestException,
      ForbiddenException,
      InternalServerErrorException,
      NotFoundException,
      UnauthorizedException,
} from '@nestjs/common';

// --- Service --- //
import { LocaleService } from '../../util/locale/locale.service';

// Interface, type --- //
import { ErrorType } from '../type/errorType.type';
import { ResponseForDeveloper } from './api.interface';

class ApiReponse {
      constructor(private readonly localeService: LocaleService) {}

      public send<T>(body: ResponseForDeveloper<T>) {
            return this.localeService.translateReponse(body);
      }

      public sendError<T>(body: ResponseForDeveloper<T>, errorType: ErrorType) {
            const res = this.localeService.translateReponse(body);

            switch (errorType) {
                  case 'BadGatewayException':
                        return new BadGatewayException(res);
                  case 'BadRequestException':
                        return new BadRequestException(res);
                  case 'InternalServerErrorException':
                        return new InternalServerErrorException(res);
                  case 'UnauthorizedException':
                        return new UnauthorizedException(res);
                  case 'NotFoundException':
                        return new NotFoundException(res);
                  case 'ForbiddenException':
                        return new ForbiddenException(res);
            }
      }
}

export const apiResponse = new ApiReponse(new LocaleService());
