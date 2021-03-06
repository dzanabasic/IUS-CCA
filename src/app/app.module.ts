import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {AuthService} from './auth/auth.service';
import {AppRoutingModule} from './auth/app-routing.module';

import { AppComponent } from './app.component';

import { CoursesComponent } from './qa-user/courses.component';
import { CourseComponent } from './qa-user/course/course.component';
import { CourseService } from './qa-user/shared/course.service';
import { CourseListComponent } from './qa-user/course-list/course-list.component';
import { environment } from '../environments/environment';
import { UserInfoComponent } from './auth/user-info/user-info.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    UserInfoComponent,
    UserLoginComponent
    ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
