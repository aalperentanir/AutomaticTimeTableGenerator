import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagmentTeacherComponent } from './components/managment/managment-prof/managment-prof.component';
import { AddNewProfComponent } from './components/add/add-new-prof/add-new-prof.component';
import { HomeComponent } from './components/home/home.component';
import { ManagmentMajorComponenet } from './components/managment/managment-major/managment-major.component';
import { AddNewMajorComponent } from './components/add/add-new-majors/add-new-majors.component';
import { AddNewDepartementComponent } from './components/add/add-new-departement/add-new-departement.component';
import { ManagmentClassesComponent } from './components/managment/managment-classes/managment-classes.component';
import { AddNewClasseComponent } from './components/add/add-new-classes/add-new-classe.component';
import { ManagmentRoomsComponent } from './components/managment/managment-rooms/managment-rooms.component';
import { AddNewRoomComponent } from './components/add/add-new-room/add-new-room.component';
import {TimetableComponent} from "./components/timetable/timetable.component";
import { EditProfComponent } from './components/edit/edit-prof/edit-prof.component';
import { NotFoundComponent } from './components/widgets/not-found/not-found.component';
import { ManagmentDepartmentComponent } from './components/managment/managment-departement/managment-departement.component';
import { EditDepartementComponent } from './components/edit/edit-departement/edit-departement.component';
import { EditRoomComponent } from './components/edit/edit-room/edit-room.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { EditMajorComponent } from './components/edit/edit-major/edit-major.component';
import {EditClassesComponent} from "./components/edit/edit-classes/edit-classes.component";
import { EditProfileComponent } from './components/edit/edit-profile/edit-profile.component';
import { NotAvaliablityComponent } from './components/managment/not-avaliable/not-avaliablity.component';
import { AddNewNotAvaliableComponent } from './components/add/add-new-not-avaliable/add-new-not-avaliable.component';
const routes: Routes = [
  { path :'' , component: HomeComponent},
  { path :'index' , component: IndexPageComponent},
    { path :'home' , component: HomeComponent},
    { path :'teachers' , component: ManagmentTeacherComponent},
    { path :'teachers/add' , component: AddNewProfComponent},
    { path :'majors' , component: ManagmentMajorComponenet},
    { path :'majors/add' , component: AddNewMajorComponent},
    { path :'departments' , component: ManagmentDepartmentComponent},
    { path :'departments/add' , component: AddNewDepartementComponent},
    { path :'classes' , component: ManagmentClassesComponent},
    { path :'classes/add' , component: AddNewClasseComponent},
    { path :'classrooms' , component: ManagmentRoomsComponent},
    { path :'classrooms/add' , component: AddNewRoomComponent},
    { path :'schedules' , component: TimetableComponent},
    {path:'teachers/edit',component:EditProfComponent},
    { path :'departments/edit' , component: EditDepartementComponent},
    { path :'classrooms/edit' , component: EditRoomComponent},
    { path :'majors/edit' , component: EditMajorComponent},
    { path :'classes/edit' , component: EditClassesComponent},
    { path :'profile/edit' , component: EditProfileComponent},
    { path :'notAvailables' , component: NotAvaliablityComponent},
    { path :'notAvailables/add' , component: AddNewNotAvaliableComponent},
    { path :'**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
