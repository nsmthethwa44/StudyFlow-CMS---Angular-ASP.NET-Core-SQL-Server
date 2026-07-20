import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service/auth-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
   @Input() isVisible = true;
   @Output() switchToLogin = new EventEmitter <void>();
   form!: FormGroup;

   constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router){}

   ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.maxLength(5)]],
    })
   }

  //  close register form 
  closeRegister(){
    this.isVisible = false;
  }

  // show login form 
  showLogin(){
    this.switchToLogin.emit();
  }


  // register new user
  register(){
    if(this.form.invalid) return;

    Swal.fire({
      title: 'Creating account...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    const values = this.form.value;

    this.authSvc.register(values).subscribe({
      next: ()=>{
        Swal.fire({
          icon: 'success',
          title: 'Account Created!',
          text: 'You can now log in.',
          timer: 2000,
          showConfirmButton: false
        });
        this.showLogin();
        // this.router.navigate(["/student"]);
      },
      error: (err) =>{
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: err.error?.message || 'Please try again later.',
          timer: 2000,
          showConfirmButton: false
        });
      }
    })
  }
}
