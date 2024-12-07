import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {

  addForm: FormGroup

  constructor(private fb: FormBuilder, private api: EmployeeService, private router: Router) {
    this.addForm = this.fb.group({
      id: ["", [Validators.required, Validators.pattern('[0-9]*')]],
      username: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ["", [Validators.required, Validators.email]],
      age: ["", [Validators.required, Validators.pattern('[0-9]*')]],
      status: [""]
    })
  }

  add(){
    if (this.addForm.valid) {
      const id = this.addForm.value.id
      const username = this.addForm.value.username
      const email = this.addForm.value.email
      const age = this.addForm.value.age
      const status = this.addForm.value.status

      console.log(id, username, email, age, status);

      // api call
      this.api.addAPI({ id, username, email, age, status }).subscribe({
        next: (res: any) => {
          alert(`welcome ${res.username} please login to explore our website`)
          this.router.navigateByUrl("/")
          this.addForm.reset()
        },
        error: (reason: any) => {
          alert(reason.error)
          this.addForm.reset()
        }
      })
    } else {
      alert("invalid form")
    }
  }

}
