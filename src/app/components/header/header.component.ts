import { Component, DoCheck, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoggedServiceService } from '../../services/logged-service.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /*
  protected title = signal('title');
  {{ title() }}
  */
  timeStamp:any = new Date();
  isDropDown:Boolean = false;
  email: String;
  isLogged;
  private loggedService = inject(LoggedServiceService);

  constructor(/*private loggedService: LoggedServiceService*/ private router : Router){
    this.isLogged = this.loggedService.getLogged();
    this.email = this.loggedService.getEmail();
    this.imagePerfilHeaderUrl = this.imagePerfilHeaderUrl;
  }
    
  imagePerfilHeaderUrl:String = `http://localhost:8080/image/get/image/user/${this.loggedService.getEmail()}`

  getImagePerfil() {
      if(this.timeStamp) {
        return this.imagePerfilHeaderUrl + '?' + this.timeStamp;
      }
      return this.imagePerfilHeaderUrl;
  }
  setImagePerfil(url: string) {
    this.imagePerfilHeaderUrl= `http://localhost:8080/image/get/image/user/${this.loggedService.getEmail()}`;
    this.timeStamp = (new Date()).getTime();
  }

  dropDownPicture(){
    this.isDropDown = !this.isDropDown;
  }

  navigateToProfilePicture(){
    this.router.navigate(["changePicture"]);
  }
}
