import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // BASE_URL:string ='https://jsonplaceholder.typicode.com'
  // userName:string;
  // repos:string;
  // apikey:string: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



  constructor(private http:HttpClient) { }
  
  
  getRepo(username:string):any{
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
