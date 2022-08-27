import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LibraryComponent } from './library/library.component';
import { BookitemComponent } from './library/bookitem/bookitem.component';
import { AddBookComponent } from './library/bookitem/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailComponent } from './user-detail/user-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LibraryComponent,
    BookitemComponent,
    AddBookComponent,
    BookDetailComponent,
    LoginComponent,
    SignupComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
