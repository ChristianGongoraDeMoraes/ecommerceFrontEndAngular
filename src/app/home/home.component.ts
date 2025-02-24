import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../services/http-service.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent /*implements OnInit*/{
  
  //"http://localhost:8080/image/get/image/GjREWsvW4AAOmSY.jpg"
  
  email:String  = "gato@hotmail.com";
  urlPicture: String = `http://localhost:8080/image/get/image/user/${this.email}`;
  
  picture:String = this.urlPicture;

}

