import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserForm } from './user-form';
import {
  maxChar,
  nameLengthError,
  noSpaceAllowed,
  patternValidator,
  surnameLengthError,
} from './Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userData: UserForm[] = [];
  constructor(private formBuilder: FormBuilder) {}

  userForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      noSpaceAllowed,
      nameLengthError,
    ]),
    lastName: new FormControl('', [
      Validators.required,
      noSpaceAllowed,
      surnameLengthError,
    ]),
    email: new FormControl('', [Validators.email, patternValidator]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, maxChar]),
  });
  userSubmit() {
    const userName = this.userForm.value.firstName;
    const lastName = this.userForm.value.lastName;
    const email = this.userForm.value.email;
    const subject = this.userForm.value.subject;
    const message = this.userForm.value.message;

    if (userName && lastName && email && subject && message) {
      console.log(this.userForm.value);
      const formData = new UserForm();
      formData.firstName = this.userForm.value.firstName!;
      formData.lastName = this.userForm.value.lastName!;
      formData.email = this.userForm.value.email!;
      formData.subject = this.userForm.value.subject!;
      formData.message = this.userForm.value.message!;

      this.userData.push(formData);
      window.alert('Form Submitted!');

      this.userForm.reset();
    } else {
      window.alert('All fields required!');
    }
  }
  ngOnInit(): void {}
}
