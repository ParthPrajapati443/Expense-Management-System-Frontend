import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCreationService } from '../Services/user-creation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  SignUpForm:any = FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, private router: Router,private signup : UserCreationService){}
  //Add user form actions
  get f() { return this.SignUpForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.SignUpForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      console.log('Form Submitted', this.SignUpForm.value);
      //alert("Great!!");
      
      this.signup.SignUp(this.SignUpForm.value).subscribe((data: any)=>{console.log(data)
        //console.log(data.code);
        //alert(data.code);

        if(data != null && data != "" && data != undefined){
            if(data.ID == 200) {
              this.router.navigateByUrl('/Home');
              //console.log("successfull");
              alert("Successfull Sign Up as User");
            }
            else if(data.ID == 400 && data.Message == "400|Already Exist"){
              alert("Please Login.");
              this.router.navigateByUrl('/Login');
              //console.log("Unsuccessfull");
            }
            else {
              alert("Try Again.");
              this.router.navigateByUrl('/SignUp');
              //console.log("Unsuccessfull");
            }
          }
        else{
          //console.log("Unsuccessfull");
          alert("Try Again.");
          }
        }

  )
    }
   
  }
    ngOnInit() {
      //Add User form validations
      this.SignUpForm = this.formBuilder.group({
      Flag:['INSERT'],
      UserName: ['', [Validators.required]],
      UserEmail: ['', [Validators.required, Validators.email]],
      UserPhone:['', [Validators.required,  Validators.minLength(10),  Validators.maxLength(15)]],
      UserAddress:['', [Validators.required, Validators.maxLength(500)]],
      UserPassword: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
}
