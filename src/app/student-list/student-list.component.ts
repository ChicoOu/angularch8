import { Component, OnInit } from '@angular/core';
import { Student, STUDENTS } from '../student';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  myForm: FormGroup;
  username: AbstractControl;
  gender: AbstractControl;
  web: AbstractControl;
  embeded: AbstractControl;

  constructor(fb: FormBuilder, private httpclient: HttpClient) {
    this.students = STUDENTS;

    this.myForm = fb.group({
      'username': ['aaaaaa', Validators.required],
      'gender': ['', Validators.required],
      'web': ['', Validators.required],
      'embeded': ['', Validators.required]
    })

    this.username = this.myForm.controls['username'];
    this.gender = this.myForm.controls['gender'];
    this.web = this.myForm.controls['web'];
    this.embeded = this.myForm.controls['embeded'];
  }

  ngOnInit() {
  }

  onSubmit(formValue: any) {
    let s = new Student();
    s.name = this.username.value;
    s.gender = this.gender.value;
    s.web = this.web.value;
    s.embeded = this.embeded.value;

    this.students.push(s);
    this.username.setValue('');
    this.gender.setValue('1');
    this.web.setValue('');
    this.embeded.setValue('');
    return false;
  }
}
