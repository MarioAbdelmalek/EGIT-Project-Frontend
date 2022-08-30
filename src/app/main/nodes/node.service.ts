import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) {
        // move initialization code to ngOnInit. Don't forget the import and implements
    }

    getClusterNodes(id: any): Observable<any> {
        return this.http.get('https://localhost:5001/api/Cluster/getClusterNodes?ClusterID=' + id);
    }

    addNode(data: any) {
        return this.http.post('https://localhost:5001/api/Node/addNode', data);
    }

    deleteNode(id: any): Observable<any> {
        return this.http.delete('https://localhost:5001/api/Node/deleteNode?NodeID=' + id);
    }

    updateNode(id: number, data: any) {
        return this.http.put('https://localhost:5001/api/Node/updateNode?NodeID=' + id, data);
    }

    getNodeByID(id: any): Observable<any> {
        return this.http.get('https://localhost:5001/api/Node/getNodeById?NodeID=' + id);
    }
}