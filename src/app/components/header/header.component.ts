import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from 'src/app/blog/blog.component';
import { DropdownDirective } from 'src/app/dropdown.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BlogComponent, RouterModule, DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
