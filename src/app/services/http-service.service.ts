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
    const url = `http://localhost:8080/Api/Product`
    return this.http.post(url, product);
  }

  postUser(user: UserRegister): Observable<any>{
    const url = `http://localhost:8080/Api/User`
    return this.http.post(url, user);
  }
  
}
