import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url='http://localhost:8080/users';
   }
   public findAll() {
     return this.http.get<User[]>(this.url);
   }
   public save(user: User) {
    return this.http.post<User>(this.url,user);
   }
}
