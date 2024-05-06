import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor( private http: HttpClient) { }

  SaveExpense(data:any){
    const url = `http://localhost:49968/api/Expense/SaveExpense`;
    const headerOptions = {                                                                                                                                                                               
        "Content-Type": "application/json"
    };
    return this.http.post(url,data,{headers:headerOptions});
  }

  GetExpense(data:any){
    const url = `http://localhost:49968/api/Expense/GetExpense`;
    const headerOptions = {                                                                                                                                                                               
        "Content-Type": "application/json"
    };
    return this.http.post(url,data,{headers:headerOptions});
  }

  MonthlyExpense(data:any){
    const url = `http://localhost:49968/api/Expense/MonthlyExpense`;
    const headerOptions = {                                                                                                                                                                               
        "Content-Type": "application/json"
    };
    return this.http.post(url,data,{headers:headerOptions});
  }
}
