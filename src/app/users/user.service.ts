import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {

    }
    userLogin(data: any): Observable<any> {
        return this.http.post('https://localhost:44334/api/User/login', data, { withCredentials: true });
    }
}