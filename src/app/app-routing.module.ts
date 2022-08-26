import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",
    title:"Book Store",
    component:LoginComponent},
  {path:"Signup",component:SignupComponent},
  {path:"Home",component:HomeComponent},
  { path: "library", component:LibraryComponent },
  { path:"library/Detail/:id", component:BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
 
