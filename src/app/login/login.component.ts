import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

type User = {
  email: String,
  password: String
}

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private request : HttpServiceService, private router : Router){}

  email = '';
  password = '';

  loginUser(){
    const user : User = {
      email : this.email,
      password : this.password
    }

    this.request.getLoginUser(user).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['market']);
      },
      error: (error: any) => {
        console.error('Erro ao logar USER:', error);
      }
    });
   }
}
