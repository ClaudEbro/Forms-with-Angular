import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  
  
  public registerForm!: FormGroup;
  public user: User = new User();

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });
  }

  public saveData() {
    console.log(this.registerForm);
    console.log('Values: ', JSON.stringify(this.registerForm.value));
    console.log('Hello !');
  }

}
