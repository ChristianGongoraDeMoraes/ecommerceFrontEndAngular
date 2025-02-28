import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { LoggedServiceService } from '../services/logged-service.service';
import { HttpServiceService } from '../services/http-service.service';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-picture',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './change-picture.component.html',
  styleUrl: './change-picture.component.scss'
})
export class ChangePictureComponent {
  
  selectedImage:any = null;
  email: String = '';


  constructor(private loggedService: LoggedServiceService, private request : HttpServiceService, private router : Router){}
  
  ngDoCheck(){
    this.email = this.loggedService.getEmail();
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  sendForm(){
    //postUserImageApi(){
    console.log(this.email, this.selectedImage)
    this.request.postUserImageToApi(this.selectedImage, this.email).subscribe({
      next: (data: any)=>{
        //console.log("postUserImageToApi:"+data);
        this.router.navigate(["market"]);
      },
      error: (error: any) =>{
        this.router.navigate(["market"]);
      }
    });
    //BUG, QUEBRA REQUEST \/
    //this.router.navigate(["market"]);
  }
}
