import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  isDropDown:Boolean = false;

  email: String | any = null;
  isLogged = false;
  
  constructor(private loggedService: LoggedServiceService){}

  ngDoCheck(){
    this.isLogged = this.loggedService.getLogged();
    this.email = this.loggedService.getEmail();
  }

  dropDownPicture(){
    this.isDropDown = !this.isDropDown;
  }
}
