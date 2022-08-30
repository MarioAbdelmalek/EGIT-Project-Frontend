import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ClusterService {

    constructor(private http: HttpClient) {
        // move initialization code to ngOnInit. Don't forget the import and implements
    }

    getAllClusters(): Observable<any> {
        return this.http.get('https://localhost:5001/api/Cluster/getAllClusters');
    }

    getClustersByType(type: any): Observable<any> {
        return this.http.get('https://localhost:5001/api/Cluster/getClustersByType?ClusterType=' + type);
    }

    addCluster(data: any) {
        return this.http.post('https://localhost:44334/api/Cluster/addCluster', data);
    }

    deleteCluster(id: any): Observable<any> {
        return this.http.delete('https://localhost:44334/api/Cluster/deleteCluster?ClusterID=' + id);
    }

    updateCluster(id: number, data: any) {
        return this.http.put('https://localhost:44334/api/Cluster/updateCluster?ClusterID=' + id, data);
    }
}