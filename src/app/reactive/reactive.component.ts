import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl,FormGroup, Validators}  from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 registerForm!: FormGroup;
 submitted: boolean = false;
username: any;
 
  
  constructor(private formBuilder:FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      username : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
      password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      gender : new FormControl('',[Validators.required]),
      designation : new FormControl('',[Validators.required]),
      aboutyourself : new FormControl('',[Validators.required,Validators.minLength(20)])
    })

    //Example for Nested FormArray
    items:this.formBuilder.array(
      [
        this.formBuilder.group({
          itemId : ['1'],
          itemName : ['ARC'],
          itemDesc : ['Tutorials'],
          itemDone : ['',Validators.requiredTrue]
        })
      ])
  }

  ngOnInit(): void {
        //Array methods
        console.log(this.registerForm.get('items')?.value);


        
        

    // Using setvalue Method we are setting the form values
    // this.registerForm.setValue({   
    //   username : 'Sri Krishna',
    //   password : 'Abc1234',
    //   gender :'male',
    //   designation :'Software Engineer',
    //   aboutyourself : 'Krishna is  a good boy'
    //  });  //we cannot omit or leave any value

    // By using patchValue we can set individual form fields
    this.registerForm.patchValue({   
        username : 'Sri Krishna',
        password : 'Abc1234',
        gender :'male',
       });  //Here we can omit or leave any value


       //learning to use valueChanges on Form Control
      //  this.registerForm.get('username')?.valueChanges.subscribe(data =>{
      //       console.log(data);
      //  });

      //learning to use valueChanges on entire Form
        //  this.registerForm.valueChanges.subscribe(data =>{
        //       console.log(data);
              
        //  });

        //Learning to use statusChanges on Form Control
      //     this.registerForm.get('username')?.statusChanges.subscribe(data =>{
      //       console.log(data);
      //  });


      //Learning statusChanges on entire form
      // this.registerForm.statusChanges.subscribe(data =>{
      //     console.log(data);
      // })
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

  resetForm(){
    this.registerForm.reset();
  }



  get items(){
    return this.registerForm.get('items') as FormArray;
}

//whenever user clicks on add buuton it need to add new item - a new element should be inserted into the form array
//our FormArray that we are working is 'items'
//Since Formarray is a array - we can apply all array methods that we know in any language Js
addNewItem(){
const itemLength = this.items.length;
const newItem = this.formBuilder.group({
  itemId : [itemLength + 1],
  itemName : [''],
  itemDesc : [''],
  itemDone : ['',Validators.requiredTrue]
});
this.items.push(newItem);
}



  
}
