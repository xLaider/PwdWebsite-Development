import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user/user';

const AUTH_API = environment.webAPI + '/Authorize';

const USER_KEY = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API, {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);

  }


  ConfirmEmail(token: string): Observable<any> {
    return this.http.put(AUTH_API + '/ConfirmEmail/' + token, token);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);


  }

  async update(): Promise<void> {
    const user = this.getUser();
    window.sessionStorage.removeItem(USER_KEY);
    await this.http.get<User>(environment.webAPI + '/User/' + user.userId).toPromise().then(result => {
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(result));
    }
    );
  }

  logout(): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.clear();
  }

  public setUser(user): any {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }


  GetPasswordRestorationToken(email: string): Observable<any> {
    return this.http.put(environment.webAPI + '/Authorize/GetPasswordRestorationToken/' + email, null);
  }

  ChangePassword(token: string, password: string): Observable<any> {
    return this.http.put(environment.webAPI + '/Authorize/RestorePassword/' + token + '/' + password, null);
  }

}
