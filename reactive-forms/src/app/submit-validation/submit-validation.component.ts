import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../username.validate';

@Component({
  selector: 'submit-validation',
  templateUrl: './submit-validation.component.html',
  styleUrls: ['./submit-validation.component.css']
})
export class SubmitValidationComponent {

  form = new FormGroup({
    username:new FormControl('', [Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace],
      UsernameValidator.shouldBeUnique),
    password:new FormControl('', Validators.required)
  });

  get username () {
    return this.form.get('username');
  }

  login() {
   
    this.form.setErrors({
      invalidLogin : true
    });
  }

}
