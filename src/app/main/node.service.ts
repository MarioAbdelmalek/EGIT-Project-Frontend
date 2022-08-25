import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  readonly APIUrl = "https://localhost:44334/api";

  constructor(private http:HttpClient) { }

  GetAllNodes(): Observable<Node[]>{
    return this.http.get < any > (this.APIUrl + '/node/getAllNodes');
  }
  DeleteNode(NodeID:number){
    return this.http.delete(this.APIUrl+'/Node/deleteNode?NodeID='+NodeID);
  }
  UpdateNode(node :Node, id:any){
    return this.http.put(this.APIUrl+'/Node/updateNode?NodeID='+id,node);
  }
  AddNode(node:Node){
    return this.http.post(this.APIUrl+'/Node/addNode',node);
  }
}
