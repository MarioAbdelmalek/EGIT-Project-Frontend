import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

    constructor(private http: HttpClient) {
        // move initialization code to ngOnInit. Don't forget the import and implements
    }

    getAllStorages(): Observable<any> {
        return this.http.get('https://localhost:44334/api/Storage/getAll');
    }

    addStorage(data: any) {
        return this.http.post('https://localhost:44334/api/Storage/addStorage', data);
    }

    deleteStorage(id: any) {
        return this.http.delete('https://localhost:44334/api/Storage/deleteById?id=' + id);
    }

    updateStorage(id: number, data: any) {
        return this.http.put('https://localhost:44334/api/Storage/updateStorage?StorageID=' + id, data);
    }
}