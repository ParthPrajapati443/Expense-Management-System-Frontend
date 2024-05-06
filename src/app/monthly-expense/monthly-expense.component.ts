import { Component } from '@angular/core';
import { MonthlyExpense } from '../Modles/MonthlyExpense';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../Services/expense.service';

@Component({
  selector: 'app-monthly-expense',
  templateUrl: './monthly-expense.component.html',
  styleUrls: ['./monthly-expense.component.css']
})
export class MonthlyExpenseComponent {
  monthlyExpenseForm:any = FormGroup;
  monthlyExpense! : MonthlyExpense[];
  submitted = false;
  // GetExpense: any;
  constructor( private formBuilder: FormBuilder, private Expense : ExpenseService, private router: Router){}
  //constructor1(private http: HttpClient){}
  //Add user form actions
  get f() { return this.monthlyExpenseForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.monthlyExpenseForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      console.log('Form Submitted',this.monthlyExpenseForm.value);
      
      this.Expense.MonthlyExpense(this.monthlyExpenseForm.value).subscribe((data: any)=>{
        console.log(data.ArrayOfResponse)
        console.log(data.ID,data.Message);
        //alert(data.code);
        //debugger
        if(data != null && data != "" && data != undefined){
            if(data.ID == 200 && data.Message == "200|Data Found") {
              //console.log("successfull");
              this.monthlyExpense = data.ArrayOfResponse;
              //console.log(this.monthlyExpense);
              //console.log(data.ArrayOfResponse);
              alert("Monthly Expense Detail.");
            }
            else if(data.ID == 400 && data.Message == "'400|Expense detail is not exist."){
              //console.log("successfull");
              //this.monthlyExpense = data.ArrayOfResponse;
              //console.log(this.monthlyExpense);
              //console.log(data.ArrayOfResponse);
              alert("Expense detail is not exist.");
            }
            else if(data.ID == 400 && data.Message == "400|User does not exist."){
              alert("User does not exist.");
              //console.log("successfull");
            }
            else if(data.ID == 400 && data.Message == "400|Enter your E-mail."){
              alert("Enter your E-mail.");
              //console.log("successfull");
            }
            else {
              alert("Try Again1.");
              this.router.navigateByUrl('/MonthlyExpense');
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
      this.monthlyExpenseForm = this.formBuilder.group({
      ExpenseEmail: ['', [Validators.required, Validators.email]],                     
      // ExpenseType: ['', [Validators.required]],
      // ExpenseAmount: ['', [Validators.required]],
      // ExpenseReason: [''],
      // ExpenseDate: ['']
      });
    }

}
