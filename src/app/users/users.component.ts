// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {
//     username: any;
//     repos: any;
//     // userName: any = 'NyururuKelvin'

//   constructor() { }

//   findProfile(){
//     this.profileService.updateProfile(this.username);

//     this.profileService.getProfileInfo().subscribe(this.username => {
//       console.log(this.username),
//     this.username= this.username      
//     });

//     this.pService.getProfileRepos().subscribe((repos: any) =>{
//       console.log(repos);
//     this.repos= repos;      
    
//     })
//   }

//   ngOnInit(){
//     this.findProfile()
//   }

// }

// }




import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { RepositoriesComponent } from '../repositories/repositories.component';
import {Repos} from '../repos';
import {Users} from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
    providers: [ApiService],
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    public searchMe = 'wanjiiru';
    public githubUser!: string;

    users!: Users;
    repository!: Repos;
    public searchRepo!: string;
    public resultCount = 12;


    findUser(username: string) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor(public githubUserRequest: ApiService, public userRepos: ApiService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;

    }
}

