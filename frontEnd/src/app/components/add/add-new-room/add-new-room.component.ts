import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/rooms.models';
import { RoomService } from 'src/app/services/classroom.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-room',
  templateUrl: './add-new-room.component.html',
  styleUrls: ['./add-new-room.component.css']
})
export class AddNewRoomComponent {
  newRoomFormGroup!: FormGroup;
  rooms:Room[]=[];

  constructor(private fb: FormBuilder,private dpService:RoomService,
    private router: Router) {}

  ngOnInit(): void {
    this.newRoomFormGroup = this.fb.group({
      capacity: this.fb.control(null, [Validators.required]),
      typeRoom: this.fb.control(null, [Validators.required]),
      numRoom: this.fb.control(null, [Validators.required])
    });

  }



  handleAddRoom() {
    if (this.newRoomFormGroup.valid) {
    const newRoom: Room = this.newRoomFormGroup.value;
    this.dpService.saveRoom(newRoom).subscribe({
      next: data => {
        Swal.fire('Succes', 'Room added successfully', 'success');
        this.router.navigateByUrl('/classrooms');
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
