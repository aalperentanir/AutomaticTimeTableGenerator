import { CookieService } from 'ngx-cookie-service';
import { Prof } from './../../../models/prof.models';
import { Component, OnInit } from '@angular/core';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  prof!: Prof;
updatePasswordFormGroup!: FormGroup;
  constructor(private cookieService: CookieService, private profService: ProfServiceService,private router: Router,private fb: FormBuilder) {
  }
  ngOnInit() {
    let id = parseFloat(this.cookieService.get('userId'));
    this.getProf(id);

     this.updatePasswordFormGroup = this.fb.group({
      oldPassword: this.fb.control(null, [Validators.required]),
      newPassword: this.fb.control(null, [Validators.required]),
      confirmPassword: this.fb.control(null, [Validators.required])
    });
  }
  getProf(id: number){
    this.profService.getProf(id).subscribe(
      (prof: Prof) => {
        this.prof = prof;
      }
    );
  }

handleEditeProf(profedit: Prof) {
    this.router.navigateByUrl('/profile/edit',{state :profedit});
  }

  handleUpdatePassword() {
  if (this.updatePasswordFormGroup.valid) {
    if (this.updatePasswordFormGroup.value.newPassword !== this.updatePasswordFormGroup.value.confirmPassword) {
      Swal.fire('Error', 'passwords do not match', 'error');
      return;
    }
    if (this.updatePasswordFormGroup.value.oldPassword !== this.prof.password) {
      Swal.fire('Error', 'Incorrect old password', 'error');
      return;
    }

    this.prof.password = this.updatePasswordFormGroup.value.newPassword;
    this.profService.updateProf(this.prof.id,this.prof).subscribe({
      next: data => {
        Swal.fire('Succes', 'Password changed successfully', 'success');
        this.updatePasswordFormGroup.reset();
        this.router.navigateByUrl('/home');

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
