import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../../../services/course-service/course-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructor-add-courses',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './instructor-add-courses.html',
  styleUrl: './instructor-add-courses.scss',
})
export class InstructorAddCourses implements OnInit{
  @Input() isVisible = false;
  form!: FormGroup;
  selectedFile: File | null = null;
  @Output() courseCreated = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private courseSvc: CourseService){}

  hideCourseBuilder(){
    this.isVisible = false;
  }

  ngOnInit(): void {
      this.form = this.fb.group({
        title: ["", [Validators.required]],
        description: ["", [Validators.required]],
        category: ["", [Validators.required]],
        level: ["", [Validators.required]],
        price: [0, [Validators.required]],
        thumbnailPath: [null]
      })
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  buildCourse(){
    if(this.form.invalid) return;

    Swal.fire({
      title: 'Creating New Course...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    const formData = new FormData();
    formData.append("title", this.form.value.title)
    formData.append("description", this.form.value.description)
    formData.append("category", this.form.value.category)
    formData.append("level", this.form.value.level)
    formData.append("price", this.form.value.price)
    if (this.selectedFile) formData.append('thumbnailPath', this.selectedFile);
    
    console.log(formData)
    this.courseSvc.createCourse(formData).subscribe({
      next: (res)=>{
      Swal.fire({
          icon: 'success',
          title: 'Course created successfully!',
          timer: 1800,
          showConfirmButton: false
        });
        this.selectedFile = null;
        this.courseCreated.emit();
      }, 
      error: (err) =>{
        console.log(err)
         Swal.fire({
          icon: 'error',
          title: 'Error creating new course',
          text: 'Please try again later.'
        });
      }
    })
    
  }
}
