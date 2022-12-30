import { Component } from '@angular/core';
import { CredentialsDto } from '../../auth/dto/credentials.dto';
import { AuthService } from '../../auth/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginResponseDto } from '../../auth/dto/login-response.dto';
import { APP_ROUTES } from '../../config/routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,

  ) {}
  login(credentails: CredentialsDto) {
    this.authService.login(credentails).subscribe({
      next: (response: LoginResponseDto) => {
        localStorage.setItem('token', response.id);
        this.toastr.success('Bienvenu :D');
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: () => {
        this.toastr.error(`veuillez vérifier vos credentials`);
      }
    })
  }
}
