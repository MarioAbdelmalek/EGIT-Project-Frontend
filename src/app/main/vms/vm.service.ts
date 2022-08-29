import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class VMService {

    constructor(private http: HttpClient) {
        // move initialization code to ngOnInit. Don't forget the import and implements
    }

    getNodeVMs(id: any): Observable<any> {
        return this.http.get('https://localhost:44334/api/Node/getNodeVMs?NodeID=' + id);
    }

    addVM(data: any) {
        return this.http.post('https://localhost:44334/api/VM/addVM', data);
    }

    deleteVM(id: any) {
        return this.http.delete('https://localhost:44334/api/VM/deleteVM?VMID=' + id);
    }

    updateVM(id: number, data: any) {
        return this.http.put('https://localhost:44334/api/VM/updateVM?VMID=' + id, data);
    }
}