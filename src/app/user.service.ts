import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserDetails(userId: number): Observable<any> {
    const url = `https://reqres.in/api/users/${userId}`;
    return this.http.get(url);
  }
}
