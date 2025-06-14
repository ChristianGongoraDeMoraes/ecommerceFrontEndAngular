import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpServiceService } from '../services/http-service.service';

type MyOrders = {
  id: string,
  usuarioId: string,
  produtoId: string
}
type EmailReqUser ={
  id:string,
  name: string,
  password:string,
  email:string
}
type Product = {
  id: string,
  name: string,
  price: number
}

@Component({
  selector: 'app-myorders',
  imports: [HeaderComponent],
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.scss'
})
export class MyordersComponent implements OnInit{

  myOrders: MyOrders[] = []
  myProductsByOrders: Product[] = []
  userId:string = '';
  constructor(private http: HttpServiceService) {
  }
  ngOnInit(): void {
    this.setUserIdAndPopuling();
    console.log(this.myOrders)
  }
  loadOrderBox(){
    for(let order of this.myOrders){
      this.http.getProductById(order.produtoId).subscribe({
      next: (data:any) => {
        this.myProductsByOrders.push(data)
      },
      error: (error: any) => {
        console.error('Erro', error);
      }
    });
    }
  }

  populingOrders(){
    this.http.getOrdersByUserId(this.userId).subscribe({
      next: (data:any) => {
        for(let order of data){
          this.myOrders.push(order)
        }
        this.loadOrderBox();
      },
      error: (error: any) => {
        console.error('Erro', error);
      }
    });
  }

  setUserIdAndPopuling(){
    this.http.getUserByEmail().subscribe({
      next: (data: EmailReqUser) => {
        this.userId = data.id
        this.populingOrders()
      },
      error: (error: any) => {
        console.error('Erro', error);
      }
    });
  }
  getTotalGasto(){
    let total = 0;
    for(let i of this.myProductsByOrders){
      total += i.price;
    }
    return total;
  }
}
