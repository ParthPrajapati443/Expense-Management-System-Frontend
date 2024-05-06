import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { UserCreationService } from '../Services/user-creation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  //Form variables
loginForm:any = FormGroup;
//data : any;
submitted = false;
constructor( private formBuilder: FormBuilder, private login: UserCreationService, private router: Router){}
//constructor1(private http: HttpClient){}
//Add user form actions
get f() { return this.loginForm.controls; }
onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
    //console.log('Form Submitted',this.loginForm.value);
    const body = {"EmailId ": this.loginForm.controls["EmailId"].value,
                                  "Password" : this.loginForm.controls["Password"].value,
                                  "Role" : this.loginForm.controls["Role"].value};
    //console.log(body);
    //alert("Great!!");
    //debugger
      this.login.Login(this.loginForm.value).subscribe((data: any)=>{
        //localStorage.setItem("userEmail",data.Email)
        //console.log(data)
        //console.log(data.Email)
        //alert(data.code);

        if(data != null && data != "" && data != undefined){
            if(data.code == 200) {
              this.router.navigateByUrl('/Home');
              //console.log("successfull");
              localStorage.setItem("userEmail",data.Email)
              alert("Successfull login as User");
            }
            else if (data.code == 400 && data.Message == "400|User does not exist"){
              //console.log("Unsuccessfull");
              alert("Please Sign Up.");
              this.router.navigateByUrl('/SignUp');
            }
            else {
              this.router.navigateByUrl('/Login');
              //console.log("Unsuccessfull");
              alert("Try Again.");
            }
          }
        else{
          console.log("Unsuccessfull");
          alert("invalid");
          }
        }
  )
  }
 
}
  ngOnInit() {
    //Add User form validations
    this.loginForm = this.formBuilder.group({
    EmailId: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    Role: ['', [Validators.required]]
    });
  }
}
