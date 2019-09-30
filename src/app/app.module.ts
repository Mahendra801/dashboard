import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JanathanewsComponent } from './janathanews/janathanews.component';
import { JanathadataComponent } from './janathadata/janathadata.component';
import { HttpClientModule } from "@angular/common/http";
import { ServiceService } from "../Services/service.service";
import { LibraryComponent } from './library/library.component';
import { Library2Component } from './library2/library2.component';
import { CrudoprationComponent } from './crudopration/crudopration.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { NewthingComponent } from './newthing/newthing.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { IncorComponent } from './incor/incor.component';
import { IncorloginComponent } from './incorlogin/incorlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlbumsComponent } from './albums/albums.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddtaskdataComponent } from './addtaskdata/addtaskdata.component';
import { PhotosComponent } from './photos/photos.component';
import { Photos2Component } from './photos2/photos2.component';
import { Post2Component } from './post2/post2.component';


@NgModule({
  declarations: [
    AppComponent,
    JanathanewsComponent,
    JanathadataComponent,
    LibraryComponent,
    Library2Component,
    CrudoprationComponent,
    NewthingComponent,
    SigninComponent,
    LoginComponent,
    IncorComponent,
    IncorloginComponent,
    DashboardComponent,
    PostsComponent,
    TasksComponent,
    AlbumsComponent,
    AddtaskdataComponent,
    PhotosComponent,
    Photos2Component,
    Post2Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
