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

  //httpService = inject(HttpServiceService)
/*
  OnInit(){
  this.httpService
    .getProductsFromApi()
    .pipe(
      catchError((err)=>{
        console.log(err);
        throw err;
      })
    )
    .subscribe((any) =>{
      this.anyItems.set(any);
    });
  }
*/

}

