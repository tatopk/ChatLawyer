import { Component } from '@angular/core';
import { ChatComponent } from '../components/chat/chat.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ChatComponent, HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
