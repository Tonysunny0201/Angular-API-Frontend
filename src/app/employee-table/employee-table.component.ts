import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {

  allEmployee:any = []

  constructor(private api:EmployeeService){}

  ngOnInit(){
    this.getAllEmploye()
  }

  getAllEmploye(){
    this.api.showAPI().subscribe((res:any)=>{
      this.allEmployee=res
     console.log(this.allEmployee);
     
    })
  }

  // delete employee
  deleteEmployee(id:any){
    console.log(id);
    this.api.deleteAPI(id).subscribe()
    this.getAllEmploye()

  }



  filter(status: string) {
    this.api.filterAPI(status).subscribe((response) => {
      this.allEmployee = response;
      console.log(this.allEmployee  );
      
    });}


}
