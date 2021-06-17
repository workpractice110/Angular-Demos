import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-solution',
  templateUrl: './test-solution.component.html',
  styleUrls: ['./test-solution.component.css']
})
export class TestSolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories=[
    {id : 1, name: 'Development'},
    {id : 2, name : 'Testing'},
    {id : 3, name : 'Devops'}
  ];

  submit(course : any) {
    console.log(course);
  }
}
