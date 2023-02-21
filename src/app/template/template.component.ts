import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  contactForm: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.contactForm.value);
  }
  
}
