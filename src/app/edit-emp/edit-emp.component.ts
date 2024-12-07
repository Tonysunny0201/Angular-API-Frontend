import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-emp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-emp.component.html',
  styleUrl: './edit-emp.component.css'
})
export class EditEmpComponent {

  item: any = ""
  allemployee: any = []
  editForm: FormGroup


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private api: EmployeeService) {
    this.editForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ["", [Validators.required, Validators.email]],
      age: ["", [Validators.required, Validators.pattern('[0-9]*')]],
      status: [""]
    })
  }

  ngOnInit() {
    this.item = this.route.snapshot.paramMap.get('item')
    console.log(this.item);
    this.getAllEmployee(this.item)
  }

  getAllEmployee(item: any) {
    this.api.editAPI(item).subscribe((res:any) => {
      this.allemployee = res
      console.log(this.allemployee);
    })
  }

  updateEmployee() {
    const id = this.allemployee.id
    const username = this.editForm.value.username ? this.editForm.value.username : this.allemployee.username
    const email = this.editForm.value.email ? this.editForm.value.email : this.allemployee.email
    const age = this.editForm.value.age ? this.editForm.value.age : this.allemployee.age
    const status = this.editForm.value.status ? this.editForm.value.status : this.allemployee.status
    console.log(username, email, age, status);

    try {
      this.api.UpdateAPI(id, { username, email, age, status }).subscribe({
        // console.log(username,email,age,status);
        next: (res:any) => {
          alert("updated sucessfully")
          this.router.navigateByUrl("/")
        },
        error: (reason:any) => {
          alert(reason.error)

        }
      })
    }
    catch (err) {
      console.log(err);

    }

  }


}
