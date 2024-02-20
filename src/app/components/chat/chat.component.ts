import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  chats = [
    { name: 'Ana', time: '4 day', message: 'Let\'s discuss this', image: 'assets/Ana.JPG', active: false },
    { name: 'Nick', time: '05:30 am', message: 'Good bye', image:'assets/Nick.JPG', active: false },
    { name: 'George', time: '3 day',  message: 'Thank you', image:'assets/George.JPG', active: false }
  ];

  messages = [
    { image: "assets/Ana.JPG", message: "Blah blah blah", time: "05:25 am",  sender: "other" },
    { image: "assets/Profile.png", message: "Exactly, even more Blah blah blah", time: "05:25 am",  sender: "user"  }
  ];

  constructor() { }

  ngOnInit() {
    this.chats[0].active = true;
  }

  toggleActive(item: any) {
    this.chats.forEach(chatItem => {
      if (chatItem !== item) {
        chatItem.active = false;
      }
    });

    item.active = !item.active;
  }
}
