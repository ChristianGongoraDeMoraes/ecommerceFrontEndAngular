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
  selectedImage:any = null;
  email = '';
  password = '';
  name = '';

  errorMessage = '';
  
  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

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
          this.postUserImageApi();
          this.router.navigate(["login"]);
        }
      },
      error: (err: any) => {
        if(this.password.length <= 6 || this.password.length >= 16){
          this.errorMessage = "Password must be more than 6 and less than 16";
        }else{
          this.errorMessage = "Invalid credentials...";
        }
      }
    });
  }
  postUserImageApi(){
    this.request.postUserImageToApi(this.selectedImage, this.email).subscribe({
      next: (data: any)=>{
        console.log("postUserImageToApi:"+data);
  
      },
      error: (error: any) =>{
        console.log('Erro ao cadastar image', error);
      }
    });
  } 
}
