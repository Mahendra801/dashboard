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
import { Example1Component } from './example1/example1.component';
import { Example2signupComponent } from './example2signup/example2signup.component';
import { GrowelhomeComponent } from './growelhome/growelhome.component';
import { Growel2Component } from './growel2/growel2.component';
import { TopnavagitionbarComponent } from './topnavagitionbar/topnavagitionbar.component';
import { NewcompnentComponent } from './newcompnent/newcompnent.component';
import { BookshomepageComponent } from './bookshomepage/bookshomepage.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookLoginComponent } from './book-login/book-login.component';
import { BookSignupComponent } from './book-signup/book-signup.component';
import { BookBuyeComponent } from './book-buye/book-buye.component';
import { BankComponent } from './bank/bank.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookPurchaseHistoryComponent } from './book-purchase-history/book-purchase-history.component';
import { AddBookToStoreComponent } from './add-book-to-store/add-book-to-store.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { UplodeImageComponent } from './uplode-image/uplode-image.component';
import { BookProfileUpdateComponent } from './book-profile-update/book-profile-update.component';
import { BookBaseurlBookbuyComponent } from './book-baseurl-bookbuy/book-baseurl-bookbuy.component';


const routes: Routes = [
    
  {path:'bookbaseurlbookbuy',component:BookBaseurlBookbuyComponent},
  {path:'bookprofile',component:BookProfileUpdateComponent},
  {path:'uplodeimage',component:UplodeImageComponent},
  {path:'getprofile',component:GetProfileComponent},
  {path:'',component:AddBookToStoreComponent},
  {path:'bookpurchasehistory',component:BookPurchaseHistoryComponent},
  {path:'bookview',component:BookViewComponent},
  {path:'bank',component:BankComponent},
  {path:"bookbuye",component:BookBuyeComponent},
  {path:"booksignup",component:BookSignupComponent},
  {path:"booklogin",component:BookLoginComponent},
  {path:"bookdetail",component:BookDetailComponent},
  {path:"bookhome",component:BookshomepageComponent},
  {path:'new',component:NewcompnentComponent},
  {path:'topnavibar',component:TopnavagitionbarComponent},
  {path:'growelhome',component:GrowelhomeComponent},
  {path:'growel2',component:Growel2Component},
  {path:'example2signup',component:Example2signupComponent},
  {path:'example1login',component:Example1Component},
  {path:'post2',component:Post2Component},
  {path:'photo2',component:Photos2Component},
  {path:'photos',component:PhotosComponent},
  { path: 'addtaskdata', component: AddtaskdataComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'incorlogin', component: IncorloginComponent },
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
