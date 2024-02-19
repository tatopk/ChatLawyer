import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

}
