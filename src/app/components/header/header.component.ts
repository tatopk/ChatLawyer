import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BlogComponent } from 'src/app/blog/blog.component';
import { DropdownDirective } from 'src/app/dropdown.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BlogComponent, RouterModule, DropdownDirective, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private cookieService: CookieService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.cookieService.check('token');
  }

  logout(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/']);
  }
}
