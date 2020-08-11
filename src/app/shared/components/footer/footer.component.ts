import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: FormControl;
  constructor() { 
    this.email = new FormControl('',[Validators.email, Validators.required]);
    // this.email.valueChanges.subscribe(value => {
      // console.log(value);
    // })
  }

  ngOnInit() {
  }

  EnviarEmail(){
    if(this.email.valid){
      console.log(this.email.value);
    }
  }

}
