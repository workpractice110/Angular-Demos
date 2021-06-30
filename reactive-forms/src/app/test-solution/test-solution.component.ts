import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../password.validate';
import { UsernameValidator } from '../username.validate';

@Component({
  selector: 'test-solution',
  templateUrl: './test-solution.component.html',
  styleUrls: ['./test-solution.component.css']
})
export class TestSolutionComponent {
  
  form :any;
  constructor(fb : FormBuilder) {
    this.form = fb.group({
      oldPassword : ['', Validators.required, PasswordValidators.validOldPassword],
      newPassword : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    },
      {
        validator : PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword () {
    return this.form.get('oldPassword');
  }

  get newPassword () {
    return this.form.get('newPassword');
  }

  get confirmPassword () {
    return this.form.get('confirmPassword');
  }



}
