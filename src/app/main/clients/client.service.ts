import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ClientService {

    constructor(private http: HttpClient) {
        // move initialization code to ngOnInit. Don't forget the import and implements
    }

    getAllClients(): Observable<any> {
        return this.http.get('https://localhost:44334/api/Client/getAllClients');
    }

    addClient(data: any) {
        return this.http.post('https://localhost:44334/api/Client/addClient', data);
    }

    deleteClient(id: any) {
        return this.http.delete('https://localhost:44334/api/Client/deleteClient?ClientID=' + id);
    }

    updateClient(id: number, data: any) {
        return this.http.put('https://localhost:44334/api/Client/updateClient?ClientID=' + id, data);
    }
}