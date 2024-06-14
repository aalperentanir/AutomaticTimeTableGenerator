
import { ModuleElement } from '../../models/moduleElement.models';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Classes } from 'src/app/models/classes.models';
import { Department } from 'src/app/models/departement.models';
import { Major } from 'src/app/models/majors.models';
import { Semestre } from 'src/app/models/semestre.models';
import { ActionsService } from 'src/app/services/actions.service';
import { ClassesService } from 'src/app/services/classe.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ScheduleService } from 'src/app/services/Schedule.service';
import { MajorService } from 'src/app/services/major.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  prof!: boolean;
  public departments:Department[] = [];
  public majors:Major[] = [];
  public semesters:Semestre[] = [];
  public moduleElement:ModuleElement[] = [];
  selectedDepartment: Department|undefined;
  selectedMajor: Major|undefined;
   selectedSemester: Semestre|undefined;
   classes!:Classes ;
  spinnerExport:boolean=false;
  ready = false;
  admin:boolean = false;
  constructor(private actons:ActionsService,private cookieService: CookieService,private departmentService: DepartmentService,private majorService: MajorService,private scheduleService:ScheduleService,private classeService:ClassesService) {

  }
  ngOnInit() {
    this.prof = (this.cookieService.get('role') == 'Teacher')? true : false; 
    if(this.prof){
       this.ready = true;
      this.scheduleService.getProfSchedule(parseFloat(this.cookieService.get("userId"))).subscribe(
        data=>{
          console.log(data);
          
          this.moduleElement = data;
          console.log(data);
        }
      )

    }
    else{this.getDepartements();
    this.admin = this.cookieService.check('role');


  }
    
  }

hasModule(days: string, timeSlot: string): boolean {

  let prd= this.getPeriode(timeSlot );
let day = this.changeDay(days).toUpperCase();

  return this.moduleElement.some(module => module.day === day && module.period === prd);
}
getPeriode(timeSlot: string): string {
  let prd = "";
  switch (timeSlot) {
    case "08:30-10:00":
      prd = "P0";
      break;
    case "10:00-12:00":
      prd = "P1";
      break;
    case "13:00-15:00":
      prd = "P2";
      break;
    case "15:00-17:00":
      prd = "P3";
      break;
      case "17:00-19:00":
        prd = "P4";
        break;
    default:
      break;
  }
  return prd;
}
changeDay(day:string){
  let prd = "";
  switch (day) {
    case "Monday":
      prd = "Monday";
      break;
    case "Tuesday":
      prd = "Tuesday";
      break;
    case "Wednesday":
      prd = "Wednesday";
      break;
    case "Thursday":
      prd = "Thursday";
      break;
    case "Friday":
      prd = "Friday";
      break;
    default:
      break;
}
return prd;
}

getModuleTitle(days: string, timeSlot: string): string {

  let day = this.changeDay(days).toUpperCase();
  let prd= this.getPeriode(timeSlot );
  const module = this.moduleElement.find(module => module.day === day && module.period === prd);
  return module ? (module.label  +"("+ module.module.classRate) + ")" : '';
}

getModuleRoom(days: string, timeSlot: string): string {
  if (this.moduleElement && this.moduleElement.length > 0) {
    let day = this.changeDay(days).toUpperCase();
    let prd = this.getPeriode(timeSlot);
    const module = this.moduleElement.find(module => module.day === day && module.period === prd);
    return module ? (module.classroom.typeRoom + "-" + module.classroom.numRoom) : '';
  } else {
    return '';
  }
}


/*getModuleRoom(days: string, timeSlot: string): string {
  let day = this.changeDay(days).toUpperCase();
  let prd= this.getPeriode(timeSlot);
  const module = this.moduleElement.find(module => module.day === day && module.period === prd);
  return module ? module.room.typeRoom+" "+module.room.numRoom : '';
}*/

getModuleTeacher(days: string, timeSlot: string): string {
 let day = this.changeDay(days).toUpperCase();
  let prd= this.getPeriode(timeSlot );
  const module = this.moduleElement.find(module => module.day === day && module.period === prd);
  if(!this.prof)
  {
  return module ? module.teacher.firstName+" "+module.teacher.lastName : '';

}else{
return module ? module.module.label : '';
}
}
  handleDownloadSchedule(){
     
    Swal.fire({
      title: 'Do you really want to open the schedule?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: 'Yes, open !',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
         this.spinnerExport=true;
        if(this.prof)
      {
         this.actons.exportFileProf(parseFloat(this.cookieService.get("userId"))).subscribe(
          data=>{
            this.spinnerExport=false;
            console.log(data)
            downloadFile(data, "application/pdf");
          },
          error=>{
            this.spinnerExport=false;
            console.log(error)
            
        Swal.fire(
          'Error !',
          'An error occurred during the export',
          'error'
        )
          }
        )
      }
      else if (this.admin){
        this.actons.exportFileClasse(this.selectedMajor!.id).subscribe(
          data=>{
            this.spinnerExport=false;
            console.log(data)
          
            downloadFile(data, "application/pdf");
          },
          error=>{
            this.spinnerExport=false;
            console.log(error)
            // if done, then show a success message
        Swal.fire(
          'Error !',
          'An error occurred during the export',
          'error'
        )
          }
        )
      }else{
        this.actons.exportFileDepartments(this.selectedDepartment!.id).subscribe(
          data=>{
            this.spinnerExport=false;
            console.log(data);
            downloadFile(data, "application/pdf");
          },
          error=>{
            this.spinnerExport=false;
            console.log(error);
            Swal.fire(
              'Error !',
              'An error occurred during the export',
              'error'
            )
          }
        )
      }
       

       


        // show a loading spinner
        
        

        
      }
    }
    )
    
  }
  getDepartements(){
    this.departmentService
      .searchDepartments("", 0,20)
      .subscribe(
        (data) => {
          this.departments = data.content;
        }
      );
  }
handleDepartmentChange(target: EventTarget | null) {
  if (target instanceof HTMLSelectElement) {
    const id = parseFloat(target.value);
    
    console.log("departmentId");
    
    console.log(id);
    
    this.selectedDepartment = this.departments.find(
      (department) => department.id === id
    );

    this.getMajors();
  }
}

handleMajorChange(target: EventTarget | null) {
  if (target instanceof HTMLSelectElement) {
    const majorId = parseFloat(target.value);
    
    
    this.selectedMajor = this.majors.find(
      (m) => m.id === majorId
    );

    // Call the getFilieres method to update the filieres based on the selected department
    this.getSemsters();
  }
}
handleSemesterChange(target: EventTarget | null) {
  if (target instanceof HTMLSelectElement) {
    const semsterId = parseFloat(target.value);
    
    
    this.selectedSemester = this.semesters.find(
      (s) => s.id === semsterId
    );

    this.ready = true;
    this.getSchedule(this.selectedDepartment!.id,this.selectedMajor!.id,semsterId);
  }
}

  /*getSchedule(semsterId: number, idFiliere: number , idDepartement: number ) {
 
    this.classeService.searchClassesSem(this.selectedMajor!.label,semsterId,0,1).subscribe(
      (data) => {
        let classeId =1;
        this.classes = data.content[0];
    
        classeId = this.classes.id;
     
    
  this.scheduleService.getClassSchedule(classeId).subscribe(
          data=>{
            this.moduleElement = data;
            console.log(data);
          }
        )
      }
    );
   
  }*/

  getSchedule(idDepartment: number, idMajor: number, semsterId: number) {
    this.classeService.searchClassesSem(this.selectedMajor!.label, semsterId, 0, 1).subscribe(
      (data) => {
        if (data.content && data.content.length > 0) {
          let classeId = data.content[0].id; 
          this.scheduleService.getClassSchedule(classeId).subscribe(
            (data) => {
              this.moduleElement = data;
              console.log(data);
            },
            (error) => {
              console.error("getClassSchedule request failure:", error);
            }
          );
        } else {
          console.error("Searching semester is not found.");
        }
      },
      (error) => {
        console.error("searchClassesSem request failure:", error);
      }
    );
  }
  


  getMajors(){
    if(this.selectedDepartment)
    this.departmentService.getMajors(this.selectedDepartment.id).subscribe(
      (data) => {
        this.majors = data;
      }
    );

    
    
  }
  getSemsters(){
    if(this.selectedMajor)
    this.majorService.getSemsterByMajor(this.selectedMajor.id).subscribe(
      (data) => {
        this.semesters = data;
      }
    );

    
    
  }


}
 function downloadFile(data: Blob, arg1: string) {
  const blob = new Blob([data], { type: arg1 });
  const url = window.URL.createObjectURL(blob);
  window.open(url);
}


