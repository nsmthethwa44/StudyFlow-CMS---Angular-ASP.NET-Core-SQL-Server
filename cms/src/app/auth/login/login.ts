import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserLogin } from '../../models/User-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  @Input() isVisible = false;
  @Output() switchToRegister = new EventEmitter <void>();
  form!: FormGroup;
  constructor(private authSvc: AuthService, private fb: FormBuilder){}

  // show login form 
  closeLogin(){
    this.isVisible = false;
  }


  // show register form 
  showRegister(){
    this.switchToRegister.emit();
  }

  ngOnInit(): void {
      this.form = this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.min(5)]]
      })
    }


    //login 
    login(){
      if (this.form.invalid) return;

      Swal.fire({
          title: 'Logging In...',
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading()
        });

      const values = this.form.value;

      this.authSvc.login(values).subscribe({
            next: (res: any) => {
                Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You have successfully logged in.',
                timer: 1800,
                showConfirmButton: false
              });
            },
            error: (err: any) => {
              console.log(err)
                setTimeout(() => {
                  Swal.fire({
                  icon: 'error',
                  title: 'Login Failed',
                  text: err.error.details || 'Failed to log in. Please try again',
                  timer: 1800,
                  showConfirmButton: false
                });
               }, 3000); // Hide after 3s
            }
        })
    }
}
