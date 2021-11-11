import { User } from './../../models/user/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Home } from 'src/app/models/home/home';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  GetHomeById(homeId: number): Observable<Home> {
    return this.http.get<Home>(environment.webAPI + '/Home/' + homeId);
  }

  GetHomeUsers(homeId: number): Observable<User[]> {
    return this.http.get<User[]>(environment.webAPI + '/Home/AllHomeUsers/' + homeId);
  }

  CreateHome(home: Home): Observable<any> {
    return this.http.post(environment.webAPI + '/Home', home);
  }

  UpdateHome(home: Home): Observable<any> {
    return this.http.put(environment.webAPI + '/Home', home);
  }
}
