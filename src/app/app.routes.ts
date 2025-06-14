import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MarketComponent } from './market/market.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ShowBuyComponent } from './show-buy/show-buy.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePictureComponent } from './change-picture/change-picture.component';
import { MyordersComponent } from './myorders/myorders.component';

export const routes: Routes = [
       
    /*{
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        },
    },
    {
        path: 'Login',
        loadComponent: () =>{
            return import('./login/login.component').then((m) => m.LoginComponent)
        },
    }*/
     { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'market', component: MarketComponent },
    { path: 'createProduct', component: CreateProductComponent },
    { path: 'showBuy', component: ShowBuyComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'changePicture', component: ChangePictureComponent },
    { path: 'myorders', component: MyordersComponent },
];
