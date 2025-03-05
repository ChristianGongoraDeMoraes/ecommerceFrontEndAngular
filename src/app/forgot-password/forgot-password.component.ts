import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-forgot-password',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email = '';

  private router = inject(Router);
  private request = inject(HttpServiceService);

  SendEmail(){
    this.request.forgotPass({email: this.email}).subscribe({
      next: (data: any) => {
        this.router.navigate(["login"]);
      },
      error: (err: any) => {
       console.log("invalid email")
      }
    });
  }
}
