// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-repositories',
//   templateUrl: './repositories.component.html',
//   styleUrls: ['./repositories.component.css']
// })
// export class RepositoriesComponent implements OnInit {
//   reposItems!: any[];
//   reposName: string='Githubsearch';
//   // constructor() { }
//   constructor(private profileService:ApiService) {

//   }


//   findRepo() {
//     this.profileService.UpdateRepo(this.reposName);
//     this.profileService.searchrepos().subscribe(repo => {

//      this.reposItems! = repo['items'];
//      console.log(this.reposItems);
//     })
//   }

//  ngOnInit() {
//    this.findRepo()
//  }

// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Repos} from '../repos';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [ApiService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository!: Repos;
    public searchRepo!: string;
    public resultCount = 12;

    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    constructor(public gitRepoRequest: ApiService ) { }

  ngOnInit() {
        this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchRepo);

      }


}

