import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReposComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/github' },
  { path: "users", component: UsersComponent},
  { path:'repos',component: ReposComponent},
  { path:'**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }


