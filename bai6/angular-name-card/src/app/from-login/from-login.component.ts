import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-from-login',
  templateUrl: './from-login.component.html',
  styleUrls: ['./from-login.component.css']
})
export class FromLoginComponent implements OnInit {

  constructor() { }
  // constructor(private fb:FormBuilder) { }
  // LoginForm=this.fb.group({
  //   email:[,Validators.required,
  //   Validators.email
  //   ],
  //   password: ""
  // })
  get form(){
    return this.LoginForm.controls
  }
  LoginForm=new FormGroup({
    email:new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    password:new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  })

  ngOnInit(): void {
  }
  submit(){
    // alert('submit')
    const username = this.LoginForm.value

  }

}
