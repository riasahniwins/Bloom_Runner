import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { ClientService } from '../Services/Client.service';
import { Observable } from 'rxjs';

@Injectable()
export class CRMResolver implements Resolve<Observable<any>> {
    constructor(private clientService: ClientService) { }

    resolve() {
        return this.clientService.GetClientData();

    }
}