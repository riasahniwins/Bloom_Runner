/* angular core modules */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
/* rxjs */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* models */
import { Client } from '../Models/Clients';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientService {
    constructor(private http: HttpClient) { }
    private APIUrl: string = `${environment.apiGateway}/clients`;

    // for getting client data with live api url
    public GetClientData(): Observable<any> {
        return this.http.post(`http://64.202.184.112:6300/api/FlowersAPI/GetData`, { 'input': 8 });
    }

    // for getting recipient data with live api url
    public GetRecipientData(data): Observable<any> {
        return this.http.post(`http://64.202.184.112:6300/api/FlowersAPI/GetData`, data);
    }
    // for getting widgets data with live api url
    public GetData(data): Observable<any> {
        return this.http.post(`http://64.202.184.112:6300/api/FlowersAPI/GetData`, data);
    }
    // for adding the clients 

    public Add(model: Client): Observable<any> {
        return this.http.post(`${this.APIUrl}`, model);
    }

}