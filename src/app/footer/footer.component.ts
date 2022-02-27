import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  value6;
  myForm = new FormGroup({
    name: new FormControl("" , [Validators.required]) , 
    email: new FormControl("" , [Validators.required]) , 
    phone: new FormControl("" , [Validators.required]) , 
    message: new FormControl("" , [Validators.required]) , 
  })
  constructor() { }

  sendData(){
    console.log(this.myForm.value);
    
  }
  ngOnInit(): void {
  }

}
