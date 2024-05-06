import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveExpense } from '../Modles/SaveExpense';
import { ExpenseService } from '../Services/expense.service';

@Component({
  selector: 'app-save-expense',
  templateUrl: './save-expense.component.html',
  styleUrls: ['./save-expense.component.css']
})
export class SaveExpenseComponent {
  //Form variables
  saveExpenseForm:any = FormGroup;
  result! : SaveExpense[];
  submitted = false;
  constructor( private formBuilder: FormBuilder, private Expense : ExpenseService, private router: Router){}
  //constructor1(private http: HttpClient){}
  //Add user form actions
  get f() { return this.saveExpenseForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.saveExpenseForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      console.log('Form Submitted',this.saveExpenseForm.value);
      
      this.Expense.SaveExpense(this.saveExpenseForm.value).subscribe((data: any)=>{console.log(data)
        //console.log(data.code);
        //alert(data.code);
        debugger
        if(data != null && data != "" && data != undefined){
            if(data.code == 200 && data.Message == "Expense inserted Successfully") {
              //console.log("successfull");
              alert("Expense inserted Successfully");
            }
            else if(data.code == 400 && data.Message == "Insufficent balence."){
              alert("Insufficent balence.");
              //console.log("successfull");
            }
            else if(data.code == 400 && data.Message == "Enter the proper details. Expense is not saved"){
              alert("Enter the proper details. Expense is not saved");
              //console.log("successfull");
            }
            else if(data.code == 400 && data.Message == "Insufficent balence."){
              alert("Insufficent balence.");
              //console.log("successfull");
            }
            else if(data.code == 400 && data.Message == "User does not exist."){
              alert("User does not exist.");
              //console.log("successfull");
            }
            else {
              alert("Try Again1.");
              this.router.navigateByUrl('/SaveExpense');
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
      this.saveExpenseForm = this.formBuilder.group({
      ExpenseEmail: ['', [Validators.required, Validators.email]],
      ExpenseType: ['', [Validators.required]],
      ExpenseAmount: ['', [Validators.required]],
      ExpenseReason: [''],
      ExpenseDate: ['']
      });
    }
  
}
