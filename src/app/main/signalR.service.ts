import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignalRService {

    public updatedClusterList: Subject<any> = new Subject<any>();
    public updatedNodeList: Subject<any> = new Subject<any>();
    public updatedVMList: Subject<any> = new Subject<any>();
    public updatedClientList: Subject<any> = new Subject<any>();

    private hubConnection!: signalR.HubConnection;

    public startConnection = () => {

        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:44334/EGITUpdates')
            .build();

        this.hubConnection.on('UpdatedClusters', (data) => {
            this.updatedClusterList.next(JSON.parse(data));
        });

        this.hubConnection.on('UpdatedNodes', (data) => {
            this.updatedNodeList.next(JSON.parse(data));
        });

        this.hubConnection.on('UpdatedVMs', (data) => {
            this.updatedVMList.next(JSON.parse(data));
        });

        this.hubConnection.on('UpdatedClients', (data) => {
            this.updatedClientList.next(JSON.parse(data));
        });

        this.hubConnection
            .start()
            .then(() => console.log('Connection Started'))
            .catch(err => console.log('Error While Starting Connection: ' + err))
    }
}