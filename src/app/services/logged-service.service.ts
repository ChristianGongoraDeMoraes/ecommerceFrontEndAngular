import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedServiceService {

  constructor() { }

  isLogged: boolean = false;

  setLoggedOn(){
    this.isLogged = true;
  }

  setLoggedOff(){
    this.isLogged = false;
  }

}
