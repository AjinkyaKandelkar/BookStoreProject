import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: "library", component:LibraryComponent },
  { path:"library/Detail/:id", component:BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
