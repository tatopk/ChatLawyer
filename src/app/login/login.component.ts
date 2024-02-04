import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http'

interface formData{
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
