import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  [x: string]: any;
  private userName = 'maureen-james';
  private clientId = '450229693207-n0sg25rjh9bfnhhsmrp1pal5d4a8km8v';
  private clientSecret = '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';

  constructor(private httpClient: HttpClient) {}


  getUser(username: string): Observable<any> {
    return this.httpClient.get(
      `https://api.github.com/users/${username}`
    );
  }


  getRepos() {
    return this['_http']
      .get(
        'https://api.github.com/users/' +
          this.userName +
          '/repos?client_id=' +
          this.clientId +
          '&client_secret=' +
          this.clientSecret
      )
      .map((res: { json: () => any }) => res.json());
  }
  updateUser(userName: string) {
    this.userName = userName;
  }
}
