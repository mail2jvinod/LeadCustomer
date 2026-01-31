import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';

@Injectable()
export class BaseService {
  public environmentApiUrl: string;
  public baseServiceUrl: string | undefined;

  constructor() {
    this.environmentApiUrl = "https://leadapi.runasp.net";
  }

public handleError(error: Response) {
    console.error(error);
    return observableThrowError(error.json() || 'Server error');
  }
}
