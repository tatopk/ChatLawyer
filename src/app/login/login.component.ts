import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http'
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';

interface formData{
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: HttpClient) {
    console.log('Constructor called');
   }

  onSubmit(formValue: formData){
    this.http.post('http://localhost:8000/api/login', formValue).subscribe((data) => {
      console.log(data);
    });
  }
}
