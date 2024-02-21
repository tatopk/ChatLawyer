import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http'
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface formData{
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [CookieService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
    console.log('Constructor called');
  }

  onSubmit(formValue: FormData) {
    this.http.post<any>('http://localhost:8000/api/client/login', formValue).subscribe((data) => {
      console.log(data);

      if (data.token) {
        this.cookieService.set('token', data.token);
        this.router.navigate(['/']);
      }
    });
  }
}
