import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MajorService } from '../../../services/major.service';
import { Major } from '../../../models/majors.models';
import { Department } from '../../../models/departement.models';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-add-new-major',
  templateUrl: './add-new-majors.component.html',
  styleUrls: ['./add-new-majors.component.css'],
})
export class AddNewMajorComponent implements OnInit {
  newMajorFormGroup!: FormGroup;
  departments: Department[] = [];

  constructor(
    private fb: FormBuilder,
    private majorService: MajorService,
    private departementService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newMajorFormGroup = this.fb.group({
      label: [null, Validators.required],
      numOfSem: [null, Validators.required],
      chefMajor: [null, Validators.required],
      department: [null, Validators.required],
    });

    this.getDepartements();
  }

  getDepartements() {
    this.departementService.getDepartements().subscribe(
      (data: Department[]) => {
        this.departments = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handleAddMajor() {
    if (this.newMajorFormGroup.valid) {
      const newMajor: Major = this.newMajorFormGroup.value;
      this.majorService.saveMajor(newMajor).subscribe({
        next: () => {
          Swal.fire('Succes', 'Major added successfully', 'success');
          this.router.navigateByUrl('/majors');
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      Swal.fire(
        'Error',
        'Please fill in all fields of the form correctly,',
        'error'
      );
    }
  }
}
