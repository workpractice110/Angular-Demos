import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from '../username.validate';

@Component({
  selector: 'test-solution-my-solution',
  templateUrl: './test-solution.component.html',
  styleUrls: ['./test-solution.component.css']
})
export class TestSolutionComponent {
  newPasswordValue:string='';

  form = new FormGroup({
    oldPassword : new FormControl('',
      Validators.required,
      UsernameValidator.oldPassword),
    newPassword : new FormControl('',
      Validators.required),
    confirmPassword : new FormControl('',
      Validators.required)
  });

  get oldPassword () {
    return this.form.get('oldPassword');
  }

  get newPassword () {
    return this.form.get('newPassword');
  }

  get confirmPassword () {
    return this.form.get('confirmPassword');
  }

  keyPressNewPassword(value : any) {
    this.newPasswordValue = value.value;
    console.log(value.value);
  }

  keyPressConfirmPassword(value : any) {
    console.log(this.newPasswordValue);
    if(value.value !== this.newPasswordValue) {
        this.confirmPassword?.setErrors({
          passDoesntMatch : true
        });
    }
    console.log(value.value);
  }

}
