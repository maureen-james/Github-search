// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   // BASE_URL:string ='https://jsonplaceholder.typicode.com'
//   userName!:string;
//   reposName!: string;
//   clientId: string = "9a67142bcc620287a7cf";
//   clientSecret: string = "90b504378b551c01458c58629dbe9a041d02c8f1";
//   apikey:string = "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"
//   // apikey:string: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



//   constructor(private http:HttpClient) { }
  
  
//   // getRepo(username:string):any{
//   //   return this.http.get(`https://api.github.com/users/${username}/repos`);
//   // }


//   getProfileInfo(){
//     return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  
//   }
//   getProfileRepos(){
//     return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
//   }
//   searchrepos() {
//     return this.http.get('https://api.github.com/search/repositories?q=' + this.reposName, ({
//       headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
//     }))
//   }
//   updateProfile(userName:string){
//     this.userName =userName
//   }
//   UpdateRepo(repoName:string) {
//     this.reposName = repoName;
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  [x: string]: any;
  private userName = 'maryammuchai';
  private clientId = 'e57c1b2aae512a8e0b5b';
  private clientSecret = 'aeb1040acfdcd7f83895ac7940da76d9d03225e7';

  constructor(private httpClient: HttpClient) {}

  // getGifs(): Observable<any> {
  //   return this.http.get(
  //     `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=8`
  //   );
  // }

  getUser(username: string): Observable<any> {
    return this.httpClient.get(
      //`https://api.github.com/users/${username}?access_token=${this.token}`
      `https://api.github.com/users/${username}`
    );
  }
  // getUser() {
  //   return this.httpClient
  //     .get(
  //       'https://api.github.com/users/' +
  //         this.userName +
  //         '?client_id=' +
  //         this.clientId +
  //         '&client_secret=' +
  //         this.clientSecret
  //     )
  //     .map((res: { json: () => any }) => res.json());
  // }

  getRepos() {
    return this._http
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
