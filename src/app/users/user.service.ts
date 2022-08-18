import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
        
    }

    registerAdmin(data: any) {
        return this.http.post('https://localhost:44334/api/User/adminRegistration', data);
    }

    registerUser(data: any) {
        return this.http.post('https://localhost:44334/api/User/userRegistration', data);
    }

    loginUser(data: any): Observable<any> {
        return this.http.post('https://localhost:44315/api/User/authenticate', data, { withCredentials: true });
    }
}