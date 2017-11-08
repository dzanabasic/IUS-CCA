import { Injectable } from '@angular/core';
import {Course} from './course.model'

import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'

@Injectable()
export class CourseService {

  courseList: AngularFireList<any>;
  selectedCourse : Course=new Course();
  
  constructor(private firebase: AngularFireDatabase) { }
  
  getData(){
    this.courseList=this.firebase.list('courses');
    return this.courseList;
  }

  insertCourse(course: Course){
    this.courseList.push({
      course_code:course.course_code,
      course_name:course.course_name,
      ects:course.ects,
      pre_requistes:course.pre_requistes
      
    });

  }
  updateCourse(crs :Course){
    
    this.courseList.update(crs.$key,{
      course_code:crs.course_code,
      course_name:crs.course_name,
      ects:crs.ects,
      pre_requistes:crs.pre_requistes
    })
  
  }

  //declaration of delete function

  deleteCourse(key :string){   
    this.courseList.remove(key);
  }
}
