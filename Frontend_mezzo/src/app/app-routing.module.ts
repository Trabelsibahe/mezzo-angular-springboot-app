import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { EditProfileComponent } from './editprofile/editprofile.component';
import { EditadminComponent } from './board-admin/editadmin/editadmin.component';
import { AdduserComponent } from './board-admin/adduser/adduser.component';

import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'news', component: NewsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'admin/adduser', component: AdduserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'monespace', component: BoardUserComponent },
  { path: 'rrh', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'edit/:id',component:EditProfileComponent},
  { path: 'editadmin/:id',component:EditadminComponent},
  { path: 'error',component:ErrorpageComponent},


  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
