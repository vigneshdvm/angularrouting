import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { SigninComponent } from './header/signin/signin.component';
import { SignoutComponent } from './header/signout/signout.component';
import { ViewComponent } from './header/view/view.component';
import { LoginComponent } from './leftnav/login/login.component';
import { LogoutComponent } from './leftnav/logout/logout.component';
import { ManageComponent } from './leftnav/manage/manage.component';
import { ShowComponent } from './leftnav/show/show.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'view',component:ViewComponent},
  {path:'signout',component:SignoutComponent},
  {path:'login',component:LoginComponent},
  {path:'show',component:ShowComponent},
  {path:'manage',component:ManageComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
