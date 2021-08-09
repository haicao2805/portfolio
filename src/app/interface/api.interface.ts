// --- Interface, type --- //
import { JoiError } from './joiError.interface';

export interface ResponseForDeveloperDetail {
      message?: JoiError;
      errorMessage?: JoiError;
      [key: string]: JoiError;
}

export interface ResponseForClientDetail {
      message?: string;
      errorMessage?: string;
      [key: string]: string;
}

export interface ResponseForDeveloper<T> {
      data?: T;
      details?: ResponseForDeveloperDetail;
}

export interface ResponseForClient<T> {
      data?: T;
      details?: ResponseForClientDetail;
}
