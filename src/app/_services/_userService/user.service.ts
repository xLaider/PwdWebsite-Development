import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  RegisterUser(user: User): Observable<any> {
    return this.http.post(environment.webAPI + '/User', user);
  }

  UpdateUser(user: User): Observable<any> {
    return this.http.put(environment.webAPI + '/User/', user);
  }

  GetUser(userId: number): Observable<User> {
    return this.http.get<User>(environment.webAPI + '/User/' + userId);
  }

  JoinHome(userId: number, homeId: number): Observable<any> {
    return this.http.put(environment.webAPI + '/User/JoinHome/' + userId + '/' + homeId, null);
  }

  LeaveHome(userId: number): Observable<any> {
    return this.http.put(environment.webAPI + '/User/LeaveHome/' + userId, null);
  }
}
