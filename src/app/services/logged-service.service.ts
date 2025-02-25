import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedServiceService {

  constructor() { }
  isLogged: boolean = false;
  email:String = '';

  setLoggedOn(email:String){
    this.isLogged = true;
    this.email = email;
  }
  getLogged(){
    return this.isLogged;
  }
  getEmail(){
    return this.email;
  }

}
