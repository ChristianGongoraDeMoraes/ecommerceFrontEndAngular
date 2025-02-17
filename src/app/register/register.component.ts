import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { HttpServiceService } from '../services/http-service.service';

type UserRegister = {
  name: String,
  email: String,
  password: String
}

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private request : HttpServiceService){}

  email = '';
  password = '';
  name = '';

  createNewUser(){
    const user : UserRegister = {
      name : this.name,
      email: this.email,
      password : this.password
    }

    this.request.postUser(user).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.error('Erro ao cadastrar USER:', error);
      }
    });
   }
}
