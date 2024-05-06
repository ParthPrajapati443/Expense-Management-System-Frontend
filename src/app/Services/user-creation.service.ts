import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCreationService {

  constructor( private http: HttpClient) { }
  
  Login(data:any){
    const url = `http://localhost:49968/api/UserRegistration/Login`
    const headerOptions = {                                                                                                                                                                               
        "Content-Type": "application/json"
    };
    return this.http.post(url,data,{headers:headerOptions});

  }

  SignUp(data:any){
    const url = `http://localhost:49968/api/UserRegistration/UserRegistration`;
    const headerOptions = {                                                                                                                                                                               
      "Content-Type": "application/json"
    };
    return this.http.post(url,data,{headers:headerOptions});
    
  }
}
