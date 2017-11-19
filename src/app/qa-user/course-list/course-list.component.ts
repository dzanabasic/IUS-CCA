import { Component, OnInit } from '@angular/core';
import {CourseService} from '../shared/course.service'
import {AngularFireList} from 'angularFire2/database'
import {Course} from '../shared/course.model'


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class CourseListComponent implements OnInit {
  courselist: Course [];
  constructor(private courseService: CourseService) { }

  //get course list
  ngOnInit() {
    var x=this.courseService.getData();
    x.snapshotChanges().subscribe(item=>{
      this.courselist=[];
      item.forEach(element=>{
        var y=element.payload.toJSON();
        y["$key"]=element.key;
        this.courselist.push(y as Course);
      });

    });
  }

  //on course selected

  onItemClick(crs:Course){
    this.courseService.selectedCourse=Object.assign({},crs);


  }

}
