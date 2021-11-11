import { Notification } from './../../models/notification/notification';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }
  SendNotification(notification: Notification): Observable<any> {
    return this.http.post(environment.webAPI + '/Notification', notification);
  }

  GetUserNotifications(email: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(environment.webAPI + '/Notification/UserEmail/' + email);
  }

  DeleteNotification(notiId: number): Observable<any> {
    return this.http.delete(environment.webAPI + '/Notification/' + notiId);
  }
  MakeRead(notiId: number): Observable<any> {
    return this.http.put(environment.webAPI + '/Notification/ChangeToSeen/' + notiId, null);
  }
}
