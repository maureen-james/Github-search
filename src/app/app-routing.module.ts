import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/github' },
  { path: "users", component: UsersComponent},
  { path:'repos',component: RepositoriesComponent},
  // { path:'**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {RouterModule, Routes} from '@angular/router';
// import { Users } from '../app/users';
// import {Repos} from '../app/repos';


// const routes: Routes = [
//     {path: 'users', component: Users},
//     {path: 'repository', component: Repos},
//     {path: '', redirectTo: '/users', pathMatch: 'full'},



// ];

// @NgModule({
//   imports: [
//     CommonModule,
//       RouterModule.forRoot(routes)
//   ],
//   declarations: []
// })
// export class RoutingModule { }
