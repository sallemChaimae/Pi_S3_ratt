import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/users/add';
    return this.http.post(apiUrl, user);
  }
  getAuthenticatedUser(userName:string): Observable<User> {
    
    return this.http.get<User>( `http://localhost:8080/users/get/${userName}`);
    
  }


  login(loginData: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/users/login'; 
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(apiUrl, loginData, { headers, responseType: 'text' });
  }
  isAuthenticated(): Observable<boolean> {

    const userName=sessionStorage.getItem('userName')
    return new Observable<boolean>(observer => {
      observer.next(!!userName); // Retourne true si le token est présent, false sinon
      observer.complete();
    });
  }
  logout(): Observable<any> {
    sessionStorage.removeItem('userName'); // Supprimez le nom d'utilisateur de la session
    return of({}); // Utilisez of() pour retourner un Observable vide
  }
}
