import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http'

interface formData{
  name: string;
  email: string;
  password: string;
  phone: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private http: HttpClient) {
    console.log('Constructor called');
   }

  onSubmit(formValue: formData){
    formValue.phone = "000000000"
    formValue.name = "test"
    this.http.post('http://localhost:8000/api/register', formValue).subscribe((data) => {
      console.log(data);
    });
  }
}
