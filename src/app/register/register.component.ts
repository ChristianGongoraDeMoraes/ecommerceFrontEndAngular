import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

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
  constructor(private request : HttpServiceService, private router: Router){}

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
        if(data){
          alert("Register Successfull!");
          this.router.navigate(["login"]);
        }else{
          alert("Something goes wrong");
        }
      },
      error: (err: any) => {
        alert("Something goes wrong");
      }
    });
   }
}
