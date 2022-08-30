import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LunService {

    constructor(private http: HttpClient) { }

    getAllLuns(): Observable<any> {
        return this.http.get('https://localhost:44334/api/Lun/getAll');
    }

    getLunByID(id: any): Observable<any> {
        return this.http.get('https://localhost:44334/api/Lun/getLun?id=' + id);
    }

    deleteLun(id: number) {
        return this.http.delete('https://localhost:44334/api/Lun/deleteLun?id=' + id);
    }

    updateLun(id: number, data: any) {
        return this.http.put('https://localhost:44334/api/Lun/updateLun?LunID=' + id, data);
    }

    addNode(data: any) {
        return this.http.post('https://localhost:44334/api/Lun/addLun', data);
    }
}