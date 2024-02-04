import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements AfterViewInit {
  chatVisible: boolean = false;
  message: string = '';

  ngAfterViewInit() {
    this.createChatElements();
    this.attachEventListeners();
  }

  private createChatElements() {
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';

    const chatButton = document.createElement('button');
    chatButton.className = 'chat-button';
    chatButton.innerText = '💬';

    const chatBox = document.createElement('div');
    chatBox.className = 'chat-box';
    chatBox.style.display = this.chatVisible ? 'block' : 'none';
    chatBox.appendChild(this.createChatHeader());
    chatBox.appendChild(this.createChatMessages());
    chatBox.appendChild(this.createChatInput());
    chatBox.appendChild(this.createSendButton());

    chatContainer.appendChild(chatButton);
    chatContainer.appendChild(chatBox);

    document.body.appendChild(chatContainer);
  }

  private createChatHeader(): HTMLElement {
    const chatHeader = document.createElement('div');
    chatHeader.className = 'chat-header';

    const closeSpan = document.createElement('span');
    closeSpan.className = 'close-chat';
    closeSpan.innerText = '×';

    const h4 = document.createElement('h4');
    h4.innerText = 'Support Chat';

    chatHeader.appendChild(closeSpan);
    chatHeader.appendChild(h4);

    return chatHeader;
  }

  private createChatMessages(): HTMLElement {
    const chatMessages = document.createElement('div');
    chatMessages.className = 'chat-messages';
    // Messages will be displayed here
    return chatMessages;
  }

  private createChatInput(): HTMLElement {
    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.className = 'chat-input';
    chatInput.placeholder = 'Type your message here...';

    return chatInput;
  }

  private createSendButton(): HTMLElement {
    const sendButton = document.createElement('button');
    sendButton.innerText = 'Send';
    sendButton.className = 'chat-send';

    return sendButton;
  }

  private attachEventListeners() {
    const chatButton = document.querySelector('.chat-button');
    const closeChatButton = document.querySelector('.close-chat');
    const sendButton = document.querySelector('.chat-send');
    const chatInput = document.querySelector('.chat-input');

    if (chatButton) {
      chatButton.addEventListener('click', () => this.toggleChat());
    }

    if (closeChatButton) {
      closeChatButton.addEventListener('click', () => this.toggleChat());
    }

    if (sendButton) {
      sendButton.addEventListener('click', () => this.sendChat());
    }

    if (chatInput) {
      chatInput.addEventListener('keydown', (event: Event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === 'Enter') {
          this.sendChat();
        }
      });
    }
  }

  toggleChat() {
    this.chatVisible = !this.chatVisible;
    const chatBox = document.querySelector('.chat-box') as HTMLElement;
    if (chatBox) {
      chatBox.style.display = this.chatVisible ? 'block' : 'none';
    }
  }

  sendChat() {
    const message = this.message.trim();
    if (message) {
      const chatMessages = document.querySelector('.chat-messages') as HTMLElement;
      if (chatMessages) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message user';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
        this.message = ''; // Clear the input field
      }
    }
  }
}
