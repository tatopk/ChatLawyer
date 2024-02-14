import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogModule } from './blog/blog.module';
import { HeaderModule } from './components/header/header.module';
import { ContactModule } from './contact/contact.module';
import { DropdownDirective } from './dropdown.directive';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    RegisterModule,
    ChatComponent,
    MainComponent,
    FooterComponent,
    HeaderModule,
    BlogModule,
    ContactModule,
    DropdownDirective,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
