import { Component, OnInit } from '@angular/core';
import { Student } from '../students';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students: Student[] = [];

  formGroupStudent : FormGroup;
  
  
  
  ngOnInit(): void {
      this.loadStudents();
  }

  loadStudents(){
    this.service.getStudents().subscribe({
      next: data => this.students = data
    });
  }

  constructor(private FormBuilder : FormBuilder,
              private service: StudentService
   ){
    this.formGroupStudent = FormBuilder.group({
      id: [''],
      name : [''],
      course: [''],
    
    });
  
  }
  

  save(){
    this.students.push(this.formGroupStudent.value);
  }


}

