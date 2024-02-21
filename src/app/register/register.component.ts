import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http'
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';

interface formData{
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FooterComponent, HeaderComponent, RouterModule],
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
    formValue.lastname = "test"
    this.http.post('http://localhost:8000/api/client/register', formValue).subscribe((data) => {
      console.log(data);
    });
  }
}
