import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../components/chat/chat.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule { }
