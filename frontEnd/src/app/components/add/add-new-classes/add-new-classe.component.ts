import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Classes } from '../../../models/classes.models';
import { ClassesService } from '../../../services/classe.service';
import { Major } from '../../../models/majors.models';
import { MajorService } from '../../../services/major.service';

@Component({
  selector: 'app-add-new-classe',
  templateUrl: './add-new-classe.component.html',
  styleUrls: ['./add-new-classe.component.css']
})
export class AddNewClasseComponent implements OnInit {
  newClassFormGroup!: FormGroup;
  majors: string[] = [];

  constructor(
    private fb: FormBuilder,
    private clService: ClassesService,
    private majorService: MajorService
  ) {}

  ngOnInit(): void {
    this.newClassFormGroup = this.fb.group({
      label: [null, Validators.required],
      nbrStudents: [null, Validators.required],
      major: [null, Validators.required],
    });

    this.fetchMajors();
  }

  fetchMajors() {
    this.majorService.getAllMajors().subscribe(
      (majors: Major[]) => {
        this.majors = majors.map(major => major.label);
        console.log(this.majors);
        if (this.majors.length > 0) {
          this.newClassFormGroup.patchValue({ major: this.majors[0] });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleAddClasses() {
    if (this.newClassFormGroup.valid) {
      const newClasse: Classes = this.newClassFormGroup.value;
      this.clService.saveClasse(newClasse).subscribe(
        (data) => {
          Swal.fire('Succes', 'Class saved successfully', 'success');
          // Reset the form
          this.newClassFormGroup.reset();
        },
        (error) => {
          console.log(error.status); // 400
          console.log(error.error); // {timestamp: '2023-06-11T11:25:16.216+00:00', status: 400, error: 'Bad Request', path: '/api/classes'}
          console.log(error.message); // "Http failure response for http://localhost:8082/api/classes: 400 OK"
        }
      );
    } else {
      Swal.fire(
        'Error',
        'Please fill in all fields of the form correctly',
        'error'
      );
    }
  }
}
