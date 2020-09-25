import { Observable, of } from 'rxjs';
import { PortalDTO } from '../../api';
import { Injectable } from '@angular/core';
import { testPortals } from '../test-data';
@Injectable()
export class PortalInternalServiceMock {
  constructor() {}
  public getAllPortals(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json' }
  ): Observable<Array<PortalDTO>> {
    return of(testPortals);
  }
}
