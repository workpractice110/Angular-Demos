import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-implementation',
  templateUrl: './ng-if-implementation.component.html',
  styleUrls: ['./ng-if-implementation.component.css']
})
export class NgIfImplementationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = ['monu'];
  //courses = [];
}
