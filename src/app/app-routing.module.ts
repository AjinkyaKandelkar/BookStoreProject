import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CategoryComponent } from './category/category.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:"",
    title:"Book Store",
    component:LoginComponent},
  {path:"Signup",component:SignupComponent},
  {path:"Home",component:HomeComponent},
  { path: "library", component:LibraryComponent },
  { path:"library/Detail/:id", component:BookDetailComponent },
  { path:"profile/:id", component:UserDetailComponent  },
  { path:"Home/category/:category",component:CategoryComponent },
  { path:"forgot",component:ForgotComponent},
  { path:"SetPass/:id", component:SetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
 
