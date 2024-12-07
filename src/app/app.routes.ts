import { Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

export const routes: Routes = [
    {
        path:'',component:EmployeeTableComponent, title:"Table"
    },
    {
        path:'add',component:AddEmpComponent, title:"Add"
    },
    {
        path:'edit/:item',component:EditEmpComponent, title:"Edit"
    },
];
