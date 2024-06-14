import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/dashboard/app.component';
import { SidebarComponent } from './components/widgets/sidebar/sidebar.component';
import { NavbarComponent } from './components/widgets/navbar/navbar.component';
import { FooterComponent } from './components/widgets/footer/footer.component';
import { PageHeaderComponent } from './components/widgets/page-header/page-header.component';
import { StatisticsComponent } from './components/widgets/statistics/statistics.component';
import { AddNewProfComponent } from './components/add/add-new-prof/add-new-prof.component';
import { ManagmentClassesComponent } from './components/managment/managment-classes/managment-classes.component';
import { ManagmentMajorComponenet } from './components/managment/managment-major/managment-major.component';
import { AddNewMajorComponent } from './components/add/add-new-majors/add-new-majors.component';
import { AddNewDepartementComponent } from './components/add/add-new-departement/add-new-departement.component';
import { ManagmentRoomsComponent } from './components/managment/managment-rooms/managment-rooms.component';
import { AddNewClasseComponent } from './components/add/add-new-classes/add-new-classe.component';
import { ManagmentTeacherComponent } from './components/managment/managment-prof/managment-prof.component';
import { AddNewRoomComponent } from './components/add/add-new-room/add-new-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimetableComponent } from './components/timetable/timetable.component';
import { EditProfComponent } from './components/edit/edit-prof/edit-prof.component';
import { NotFoundComponent } from './components/widgets/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagmentDepartmentComponent } from './components/managment/managment-departement/managment-departement.component';
import { EditDepartementComponent } from './components/edit/edit-departement/edit-departement.component';
import { EditRoomComponent } from './components/edit/edit-room/edit-room.component';
import { ActionsComponent } from './components/dashboard/actions/actions.component';
import { EditMajorComponent } from './components/edit/edit-major/edit-major.component';
import { EditClassesComponent } from './components/edit/edit-classes/edit-classes.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { LoginComponent } from './components/widgets/login/login.component';
import { ProfileComponent } from './components/widgets/profile/profile.component';
import { EditProfileComponent } from './components/edit/edit-profile/edit-profile.component';
import { NotAvaliablityComponent } from './components/managment/not-avaliable/not-avaliablity.component';
import { AddNewNotAvaliableComponent } from './components/add/add-new-not-avaliable/add-new-not-avaliable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent,
    StatisticsComponent,
    ActionsComponent,
    AddNewProfComponent,
    ManagmentTeacherComponent,
    ManagmentMajorComponenet,
    NotAvaliablityComponent,
    AddNewMajorComponent,
    AddNewDepartementComponent,
    ManagmentDepartmentComponent,
    AddNewClasseComponent,
    ManagmentClassesComponent,
    ManagmentRoomsComponent,
    AddNewRoomComponent,
    TimetableComponent,
    EditProfComponent,
    NotFoundComponent,
    EditDepartementComponent,
    EditRoomComponent,
    ActionsComponent,
    EditMajorComponent,
    EditClassesComponent,
    IndexPageComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    AddNewNotAvaliableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
