import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // server_url = "http://localhost:3000/employees"
  server_url = "https://angular-api-server.onrender.com/employees"


  constructor(private http:HttpClient) { }

  // add employee
  addAPI(reqBody:any){ return this.http.post(`${this.server_url}`,reqBody)}

  // show employees
  showAPI(){ return this.http.get(`${this.server_url}`)}

  // delete employees
  deleteAPI(id:any){ return this.http.delete(`${this.server_url}/${id}`)}

   // delete employees
   editAPI(id:any){ return this.http.get(`${this.server_url}/${id}`)}

  //  
  UpdateAPI(id:any,reqBody:any){ return this.http.put(`${this.server_url}/${id}`,reqBody)}

  // filtering 
  filterAPI(status: string) {
    return this.http.get(`${this.server_url}?status=${status}`);
  }
}
