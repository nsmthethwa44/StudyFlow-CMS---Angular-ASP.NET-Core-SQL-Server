import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user-service/user-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-add-user.html',
  styleUrl: './admin-add-user.scss',
})
export class AdminAddUser implements OnInit{
  @Input() isVisible = false;
  form!: FormGroup;
  @Output() userCreated = new EventEmitter<void>();
  @Output() closeForm = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private userSvc: UserService){}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required, Validators.maxLength(11)]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      role: ["", [Validators.required]],
    })
  }


  // add user on submit
onSubmit() {
  if (this.form.invalid) {
    // this.form.markAllAsTouched();

    Swal.fire({
      icon: 'warning',
      title: 'Missing Information',
      text: 'Please complete all required fields.'
    });

    return;
  }

  this.userSvc.addNewUser(this.form.value).subscribe({
    next: (res) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User created successfully.',
        timer: 1800,
        showConfirmButton: false
      });
      this.form.reset();
      // this.form.patchValue({ role: ""});
      this.closeToggleAddUserForm();
      this.userCreated.emit();
    },

    error: (err) => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: err.error?.title ?? 'Unable to create user.'
      });
    }

  });

}

  // closeToggleAddUserForm(){
  //   this.isVisible = false;
  // }

  closeToggleAddUserForm() {
    this.closeForm.emit();
}
}
