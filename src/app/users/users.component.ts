// // import { Component, OnInit } from '@angular/core';
// // import { ApiService } from '../api.service';
// // @Component({
// //   selector: 'app-users',
// //   templateUrl: './users.component.html',
// //   styleUrls: ['./users.component.css']
// // })
// // export class UsersComponent implements OnInit {

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ApiService],
})
export class UsersComponent implements OnInit {
  user: any;
  repos: any;
  userName: string='maureen-james';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUser(this.userName).subscribe((user: any) => {
      this.user = user;
      console.log(user);
    });

    this.apiService.getRepos().subscribe((repos: any) => {
      this.repos = repos;
    });
  }

      findProfile(){

        this.apiService.updateUser(this.userName);

        this.apiService.getUser(this.userName).subscribe((user: any) => {
          this.user = user;
        });

        this.apiService.getRepos().subscribe((repos: any) => {

          this.repos = repos;
        });

  }
}

