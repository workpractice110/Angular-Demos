import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../username.validate';

@Component({
  selector: 'nested-form-groups',
  templateUrl: './nested-form-groups.component.html',
  styleUrls: ['./nested-form-groups.component.css']
})
export class NestedFormGroupsComponent {

  form = new FormGroup({
    account : new FormGroup({
      username:new FormControl('', [Validators.required,
        Validators.minLength(3),
        UsernameValidator.cannotContainSpace],
        UsernameValidator.shouldBeUnique),
      password:new FormControl('', Validators.required)
    })
  });

  get username () {
    return this.form.get('account.username');
  }

}
