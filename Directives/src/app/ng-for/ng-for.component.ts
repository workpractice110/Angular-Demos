import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  courses = [
    {id:1, name:'course1 '},
    {id:2, name:'course2 '},
    {id:3, name:'course3 '}
  ]

  newCourses:any;

  loadCourses() {
    this.newCourses = [
      {id:4, name:'course4 '},
      {id:5, name:'course5 '},
      {id:6, name:'course6 '}
    ];
  }

  trackCourse(index : any, course : any) {
    return course ? course.id : undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
