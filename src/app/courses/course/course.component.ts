import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {CourseService} from '../shared/course.service'
import {Course} from '../shared/course.model'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form:NgForm){
    if(form.value.$key==null)
      this.courseService.insertCourse(form.value);
    else
      this.courseService.updateCourse(form.value);
    this.resetForm(form);
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.reset();
    this.courseService.selectedCourse={
      $key: null,
      course_code: '',
      course_name: '',
      ects: '',
      pre_requistes: '',
  }
}

onDelete(form:NgForm){
  if(confirm('Are you sure to delete this record?')==true)
  {
    this.courseService.deleteCourse(form.value.$key);
    this.resetForm(form);
  }

}

}
