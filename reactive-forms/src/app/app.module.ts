import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SubmitValidationComponent } from './submit-validation/submit-validation.component';
import { NestedFormGroupsComponent } from './nested-form-groups/nested-form-groups.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { TestSolutionComponent } from './test-solution/test-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SubmitValidationComponent,
    NestedFormGroupsComponent,
    FormArrayComponent,
    TestSolutionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
