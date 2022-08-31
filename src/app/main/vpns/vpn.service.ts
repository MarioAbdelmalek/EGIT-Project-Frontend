import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VpnService {

  readonly APIUrl = "https://localhost:44334/api";

  constructor(private http:HttpClient) { }

  GetAllVpns(): Observable<any>{
    return this.http.get < any > (this.APIUrl + '/Vpn/getAllVPNs');
  }

  GetVpn(VpnID: number): any{
    return this.http.get<any>(this.APIUrl+'/Vpn/getVPNById?VpnID='+VpnID);
  }

  DeleteVpn(VpnID:number){
    return this.http.delete(this.APIUrl+'/Vpn/deleteVPN?VpnID='+VpnID);
  }
  UpdateVpn(id:any,Vpn:any){
    return this.http.put(this.APIUrl+'/Vpn/updateVPN?VpnID='+id,Vpn);
  }
  AddVpn(Vpn:any){
    return this.http.post(this.APIUrl+'/Vpn/addVPN',Vpn);
  }
  getAllClients(): Observable<any> {
    return this.http.get('https://localhost:44334/api/Client/getAllClients');
}
}
