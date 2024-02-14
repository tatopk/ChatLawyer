import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './components/chat/chat.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatContainerComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
