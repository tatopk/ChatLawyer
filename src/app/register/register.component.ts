import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // constructor(private http: HttpClient) { }

  // onSubmit(formValue: formData){
  //   formValue.phone = "000000000"
  //   this.http.post('http://localhost:8000/api/register', formValue).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
