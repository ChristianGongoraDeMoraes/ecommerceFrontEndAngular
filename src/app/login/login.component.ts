import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { Router, RouterLink } from '@angular/router';
import { LoggedServiceService } from '../services/logged-service.service';

type User = {
  email: String,
  password: String
}

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private logServ = inject(LoggedServiceService);
  constructor(private request : HttpServiceService, private router : Router/*, private logServ: LoggedServiceService*/){}

  errorMessage = '';

  email = '';
  password = '';
  /*ngDoCheck(){
    this.errorMessage = this.errorMessage;
  }*/

  loginUser(){
    const user : User = {
      email : this.email,
      password : this.password
    }

    this.request.getLoginUser(user).subscribe({
      next: (data: any) => {
        if(data){
          this.logServ.setLoggedOn(this.email);
          this.router.navigate(['market']);
        }else{
          this.errorMessage = 'Invalid credentials';
        }
      },
      error: (error: any) => {
        this.errorMessage = 'Invalid credentials';
        console.log('error')
      }
    });
   }
}
