import { DepartmentService } from 'src/app/services/department.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/models/departement.models';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-departement',
  templateUrl: './add-new-departement.component.html',
  styleUrls: ['./add-new-departement.component.css']
})
export class AddNewDepartementComponent implements OnInit {
  newDepartementFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,private dpService:DepartmentService,
    private router: Router) {}

  ngOnInit(): void {
    this.newDepartementFormGroup = this.fb.group({
      label: this.fb.control(null, [Validators.required]),
      chefDepartment: this.fb.control(null, [Validators.required])
    });
  }

  handleAddDepartement() {
    if (this.newDepartementFormGroup.valid) {
    const newDepart: Department = this.newDepartementFormGroup.value;
    this.dpService.saveDepartment(newDepart).subscribe({
      next: data => {
        Swal.fire('Succes', 'Department added successfully', 'success');
        this.router.navigateByUrl('/departments');
      },
      error: err => {
        console.log(err);
      }
    });
  } else {
    Swal.fire('Error', 'Please fill in all fields of the form correctly', 'error');
  }
  }
}
