import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[FormsModule]
})
export class SignupComponent implements OnInit {
  username = '';
  password = '';
  confirmPassword = '';
  email = '';

  constructor() { }

  signup(form: any) {
    console.log('Form Data: ');
    console.log(form);
    if (form.password !== form.confirmPassword){
      console.log('false');
      form.confirmPassword.setErrors( {MatchPassword: true} );
    }
  }


  ngOnInit() {
  }
}
