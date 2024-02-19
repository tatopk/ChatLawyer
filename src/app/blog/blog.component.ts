import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
