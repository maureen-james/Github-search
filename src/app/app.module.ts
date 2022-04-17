import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
// import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { ApiService } from './api.service';
import {HTTPClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesComponent,
    // UsersComponent,
    FormComponent,
    HighlightDirective,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HTTPClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
