import { Component, inject, input } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';

type Product = {
  name: String,
  price: Number,
}

@Component({
  selector: 'app-create-product',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

  constructor(private request : HttpServiceService){
  }
  
  name = '';
  price = 0;
 

  addNewProduct(){
    const product : Product = {
      name : this.name,
      price : this.price
    }

    this.request.postProductsToApi(product).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("user criado com sucesso!");
      },
      error: (error: any) => {
        console.error('Erro ao cadastrar USER:', error);
      }
    });
   }

}
