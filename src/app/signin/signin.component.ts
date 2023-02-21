import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // loginUser(signInForm: NgForm){
  //   //let userObj = signInForm.value;
  //     console.log(signInForm.value);
      
  // }

  onSubmit(formRef:NgForm){
    let userObj = formRef.value;
    console.log(userObj);
  }

}
