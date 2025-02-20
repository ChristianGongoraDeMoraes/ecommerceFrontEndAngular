import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email = '';

  SendEmail(){
    alert(`Email Sent to : ${this.email}`)
  }
}
