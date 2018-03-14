import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

// components
import { AppComponent } from './app.component';
import { UsersComponent } from './components/user/users.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { DetailsUserComponent } from './components/user/details-user/details-user.component';
import { AboutComponent } from './components/about/about.component';

// services
import { UserService } from './services/user.service';


const appRoutes: Routes = [
  {path:'', component:UsersComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    UpdateUserComponent,
    AddUserComponent,
    DetailsUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
