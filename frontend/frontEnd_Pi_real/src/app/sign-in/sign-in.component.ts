import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginData: { userName: string, password: string, teacherCode?: string } = { userName: '', password: '', teacherCode: '' };
  errorMessage: string = '';
  successMessage: string = '';
  passwordVisible: boolean = false;
  userType: string = ''; 

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
 

  constructor(private authService: UserServiceService, private router: Router) { }

  onSubmitLogin() {
    if (this.userType === 'student') {
    
      this.authService.login(this.loginData)
        .subscribe(
          response => {
            console.log('Login successful:', response);
            this.successMessage = 'Vous êtes connecté(e) avec succès';
            const successMessage = "Login successful!";
            const userName = response.replace(successMessage, '').trim();
            sessionStorage.setItem('userName', userName);
            sessionStorage.setItem('userType', this.userType);
            
            console.log(this.successMessage)
          },
          error => {
            console.error('Error during login:', error);
            this.errorMessage = 'Une erreur est survenue lors de la connexion';
            console.log(this.errorMessage)
          }
        );
    } 
    else if (this.userType === 'teacher') {
      
      this.authService.login(this.loginData)
        .subscribe(
          response => {
            console.log('Login successful:', response);
            this.successMessage = 'Vous êtes connecté(e) avec succès';
            const successMessage = "Login successful!";
            const userName = response.replace(successMessage, '').trim();
            sessionStorage.setItem('userName', userName);
            console.log(this.successMessage)
          },
          error => {
            console.error('Error during login:', error);
            this.errorMessage = 'Une erreur est survenue lors de la connexion';
            console.log(this.errorMessage)
          }
        );
    }
  }
}
