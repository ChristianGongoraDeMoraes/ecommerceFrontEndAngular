import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { ProductServiceService } from '../services/product-service.service';

type Product = {
  name: String,
  price: Number | null
}

@Component({
  selector: 'app-show-buy',
  imports: [HeaderComponent],
  templateUrl: './show-buy.component.html',
  styleUrl: './show-buy.component.scss'
})
export class ShowBuyComponent implements OnInit{
  constructor(private prod : ProductServiceService){}
  product: Product = {name: '', price: 0};
  urlImage:String = "";

  
  ngOnInit(): void {
    this.product = { name: this.prod.productName, price: this.prod.productPrice }
    this.urlImage = `http://localhost:8080/products/get/image/product/${this.product.name}`
  }

}