import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../Services/expense.service';
import { GetExpense } from '../Modles/GetExpense';

@Component({
  selector: 'app-get-expense',
  templateUrl: './get-expense.component.html',
  styleUrls: ['./get-expense.component.css']
})
export class GetExpenseComponent {
  getExpenseForm:any = FormGroup;
  getExpense! : GetExpense[];
  submitted = false;
  // GetExpense: any;
  constructor( private formBuilder: FormBuilder, private Expense : ExpenseService, private router: Router){


  }
  //constructor1(private http: HttpClient){}
  //Add user form actions
  get f() { return this.getExpenseForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.getExpenseForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      console.log('Form Submitted',this.getExpenseForm.value);
      
      this.Expense.GetExpense(this.getExpenseForm.value).subscribe((data: any)=>{
        //console.log(data.ArrayOfResponse)
        //console.log(data.ID,data.Message);
        //alert(data.code);
        //debugger
        if(data != null && data != "" && data != undefined){
            if(data.ID == 200 && data.Message == "200|Expense Detail of all users.") {
              this.getExpense = data.ArrayOfResponse;
              //console.log("successfull");
              //console.log(this.getExpense);
              //console.log(data.ArrayOfResponse);
              alert("Expense Detail of all users.");
            }
            else if(data.ID == 200 && data.Message == "200|Expense Detail of only one user."){
              this.getExpense = data.ArrayOfResponse;
              //console.log("successfull");
              //console.log(this.getExpense);
              //console.log(data.ArrayOfResponse);
              alert("Expense Detail of only one user.");
            }
            else if(data.ID == 400 && data.Message == "400|Expense detail is not exist."){
              alert("Expense Detail is not Exist.");
              //console.log("successfull");
            }
            else if(data.ID == 400 && data.Message == "400|User dose not Exist."){
              alert("User does not exist.");
              //console.log("successfull");
            }
            else {
              alert("Try Again1.");
              this.router.navigateByUrl('/GetExpense');
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
      this.getExpenseForm = this.formBuilder.group({
      ExpenseEmail: ['', [Validators.email]],                      //Validators.required
      // ExpenseType: ['', [Validators.required]],
      // ExpenseAmount: ['', [Validators.required]],
      // ExpenseReason: [''],
      // ExpenseDate: ['']
      });
    }

}
