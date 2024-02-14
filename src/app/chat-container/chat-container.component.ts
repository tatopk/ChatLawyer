import { Component } from '@angular/core';
import { ChatComponent } from '../components/chat/chat.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [ChatComponent, HeaderComponent, FooterComponent],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.css'
})
export class ChatContainerComponent {

}
