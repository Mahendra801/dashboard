import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JanathanewsComponent } from './janathanews/janathanews.component';
import { JanathadataComponent } from './janathadata/janathadata.component';
import { LibraryComponent } from './library/library.component';
import { Library2Component } from './library2/library2.component';
import { CrudoprationComponent } from './crudopration/crudopration.component';
import { NewthingComponent } from './newthing/newthing.component'
import { SigninComponent } from './signin/signin.component'
import { LoginComponent } from './login/login.component'
import { IncorComponent } from './incor/incor.component'
import { IncorloginComponent } from './incorlogin/incorlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { PostsComponent } from './posts/posts.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddtaskdataComponent } from './addtaskdata/addtaskdata.component';
import { PhotosComponent } from './photos/photos.component';
import { Photos2Component } from './photos2/photos2.component';
import { Post2Component } from './post2/post2.component';


const routes: Routes = [


  {path:'post2',component:Post2Component},
  {path:'photo2',component:Photos2Component},
  {path:'photos',component:PhotosComponent},
  { path: 'addtaskdata', component: AddtaskdataComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: IncorloginComponent },
  { path: 'incor', component: IncorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'newthing', component: NewthingComponent },
  { path: 'crud', component: CrudoprationComponent },
  { path: 'library2', component: Library2Component },
  { path: 'library', component: LibraryComponent },
  { path: 'janathanews', component: JanathanewsComponent },
  { path: 'jdata', component: JanathadataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
