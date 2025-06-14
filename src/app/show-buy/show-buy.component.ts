import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { ProductServiceService } from '../services/product-service.service';
import VanillaTilt from 'vanilla-tilt';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

type Product = {
  name: String,
  price: Number | null
}
type EmailReqUser ={
  id:string,
  name: string,
  password:string,
  email:string
}

@Component({
  selector: 'app-show-buy',
  imports: [HeaderComponent],
  templateUrl: './show-buy.component.html',
  styleUrl: './show-buy.component.scss'
})
export class ShowBuyComponent implements OnInit{
  constructor(private prod : ProductServiceService, private http: HttpServiceService, private route: Router){}
  product: Product = {name: '', price: 0};
  urlImage:String = "";
  userId:String = '';

  
  ngOnInit(): void {
    this.product = { name: this.prod.productName, price: this.prod.productPrice }
    this.urlImage = `http://localhost:8080/products/get/image/product/${this.product.name}`
     this.setUserId();
  }
  ngAfterViewInit(): void{
    VanillaTilt.init(document.querySelector('.card') as any, {
        max: 10,
        reverse: true
    });
  }

  btnComprar(){
    this.http.postNewOrder(this.prod.productId, this.userId).subscribe({
      next: (data: any) => {
        this.route.navigate(['market']);
      },
      error: (error: any) => {
        console.error('Erro', error);
      }
    });
  }
  setUserId(){
    this.http.getUserByEmail().subscribe({
      next: (data: EmailReqUser) => {
        this.userId = data.id
      },
      error: (error: any) => {
        console.error('Erro', error);
      }
    });
  }
}