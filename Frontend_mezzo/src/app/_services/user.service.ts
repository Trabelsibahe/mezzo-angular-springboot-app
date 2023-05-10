import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8088/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


                  // EL CRUD
                  getAllUsers() {
                    return this.http.get<User[]>(API_URL+"getall");
                  }
                
                  deleteUser(id : number){
                    return this.http.delete<User[]>(API_URL+id);
                  }
                  findUserById(id :number){
                    return this.http.get<User>(API_URL +"getuser/" + id);
                   }
                    updateAllUser(u :User){
                  return this.http.put<User>(API_URL + u.id, u);
                  }
                 


                  // MA TETMASECH

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'rrh', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
