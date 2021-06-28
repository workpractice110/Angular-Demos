import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  form = new FormGroup({
    topics:new FormArray([])
  });

  addTopic(topic:HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic:AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics () {
    return this.form.get('topics') as FormArray;
  }
}
