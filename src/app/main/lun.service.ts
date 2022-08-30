import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateLunDto } from 'src/Models/CreateLunDto';
import { Lun } from 'src/Models/lun';

@Injectable({
  providedIn: 'root'
})
export class LunService {

  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http:HttpClient) { }

  GetAllLuns(): Observable<Lun[]>{
    return this.http.get < any > (this.APIUrl + '/Lun/getAll');
  }

  GetLun(LunID: number): Lun{
    return this.http.get<any>(this.APIUrl+'/Lun/getLun?id='+LunID);
  }
  DeleteLun(LunID:number){
    return this.http.delete(this.APIUrl+'/Lun/deleteLun?id='+LunID);
  }
  UpdateLun(lun:Lun, id:any){
    return this.http.put(this.APIUrl+'/Lun/updateLun?LunID='+id,lun);
  }
  AddLun(lun:CreateLunDto){
    return this.http.post(this.APIUrl+'/Lun/addLun',lun);
  }
}
