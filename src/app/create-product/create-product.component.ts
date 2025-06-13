import { Component, inject, input, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';

type Product = {
  name: String,
  price: Number
}

@Component({
  selector: 'app-create-product',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent{

  constructor(private request : HttpServiceService){
  }
  
  name = '';
  price = '';
  selectedImage: any = null;
  
 
  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  addNewProduct(){ 

    const product : Product = {
      name : this.name,
      price : Number(this.price)
    }

    this.request.postProductsToApi(product).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Criado com sucesso!");
        this.postImageApi();
      },
      error: (error: any) => {
        console.error('Erro ao cadastrar product:', error);
      }
    });

  }
  
  postImageApi(){
    this.request.postImageToApi(this.selectedImage, this.name).subscribe({
      next: (data: any)=>{
        console.log("postImageToApi:"+data);

      },
      error: (error: any) =>{
        console.log('Erro ao cadastar image', error);
      }
    });
  }

}
