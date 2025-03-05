import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
type Product =  {
  name: String,
  price: Number
}
type User = {
  email: String,
  password: String
}
type UserRegister = {
  name: String,
  email: String,
  password: String
}
type ForgotPass = {
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(private http: HttpClient) {  
  }

  

  getProducts(): Observable<any>{
    const url = `http://localhost:8080/Api/Product`
    return this.http.get(url);
  }

  getLoginUser(user: User): Observable<any>{
    const url = `http://localhost:8080/Api/User/login`
    return this.http.post(url, user);
  }

  postProductsToApi(product: Product): Observable<any>{
    const url = `http://localhost:8080/Api/Product`;
    return this.http.post(url, product);
  }
  postImageToApi(image: any, prodName: any): Observable<any>  {
    const url = `http://localhost:8080/products/upload/image`;
    let formatProdName: string = `{"productName" : "${prodName}"}`;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('product', formatProdName);
    console.log(formData);

    return this.http.post(url, formData);
  }

  postUser(user: UserRegister): Observable<any>{
    const url = `http://localhost:8080/Api/User/register`
    return this.http.post(url, user);
  }

  postUserImageToApi(image: any, email: any){
    const url = `http://localhost:8080/image/upload/image`
    let formatUserEmail: string = `{"userEmail" : "${email}"}`;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('user', formatUserEmail);
    console.log(formData);

    return this.http.post(url, formData);
  }

  forgotPass(forgotPass: ForgotPass): Observable<any>{
    const url = `http://localhost:8080/api/emails`
    
    return this.http.post(url, forgotPass);
  }
  
}
