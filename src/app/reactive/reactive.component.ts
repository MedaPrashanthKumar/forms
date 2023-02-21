import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators}  from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 registerForm!: FormGroup;
 submitted: boolean = false;
username: any;
 
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
      password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      gender : new FormControl('',[Validators.required]),
      designation : new FormControl('',[Validators.required]),
      aboutyourself : new FormControl('',[Validators.required,Validators.minLength(20)])
    })
  }
  onSubmit(){
    this.submitted = true ;
    if(this.registerForm){
      console.log(this.registerForm.value);
    }
  }

  getControls(){
    return this.registerForm.controls;
  }

}
