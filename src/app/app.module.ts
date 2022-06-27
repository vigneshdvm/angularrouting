import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './header/home/home.component';
import { ViewComponent } from './header/view/view.component';
import { SigninComponent } from './header/signin/signin.component';
import { SignoutComponent } from './header/signout/signout.component';
import { ShowComponent } from './leftnav/show/show.component';
import { LoginComponent } from './leftnav/login/login.component';
import { LogoutComponent } from './leftnav/logout/logout.component';
import { ManageComponent } from './leftnav/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    SigninComponent,
    SignoutComponent,
    ShowComponent,
    LoginComponent,
    LogoutComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
