import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prof } from 'src/app/models/prof.models';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-prof',
  templateUrl: './add-new-prof.component.html',
  styleUrls: ['./add-new-prof.component.css']
})
export class AddNewProfComponent {
  newProfFormGroup!: FormGroup;
  
  constructor(private fb: FormBuilder,private profService : ProfServiceService, private router:Router) {}

  ngOnInit(): void {
    this.newProfFormGroup = this.fb.group({
     
      lastName: this.fb.control(null, [Validators.required]),
      firstName: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      login: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
    });
  }

  handleAddProf() {
  if (this.newProfFormGroup.valid) {
    const newProf: Prof = this.newProfFormGroup.value;
    this.profService.saveProf(newProf).subscribe({
      next: data => {
        Swal.fire('Success', 'Teacher added successfully', 'success');
        this.router.navigateByUrl('/teachers');
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
