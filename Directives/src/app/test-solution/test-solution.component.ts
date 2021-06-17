import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-solution',
  templateUrl: './test-solution.component.html',
  styleUrls: ['./test-solution.component.css']
})
export class TestSolutionComponent implements OnInit {


@Input() title='';

isExpanded = false;

toggle() {
  this.isExpanded = !this.isExpanded;
}


  constructor() { }

  ngOnInit(): void {
  }

}
