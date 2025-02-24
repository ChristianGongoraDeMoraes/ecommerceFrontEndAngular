import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { ArrayType } from '@angular/compiler';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

type  Product = {
  name: String,
  price: Number
}


@Component({
  selector: 'app-market',
  imports: [HeaderComponent],
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent implements OnInit{
 
 constructor(private request: HttpServiceService, private router: Router, private prod : ProductServiceService){}
  products: Product[] = [];

  buyBtn(product: String){
     for(let i of this.products){
      if(product == i.name){
        /*this.products.splice(this.products.indexOf(i), 1)*/
        this.prod.setProductName(i.name);
        this.prod.setProductPrice(i.price);
        this.router.navigate(['showBuy']);
      }
    }
  }




  ngOnInit(): void {
    
    this.request.getProducts().subscribe({
      next: (data: any) => {
        for(let i of data){
          this.products.push(i)
          console.log(this.products)
        }
      },
      error: (error: any) => {
        console.error('Erro ao cadastrar USER:', error);
      }
    });
  }
}
