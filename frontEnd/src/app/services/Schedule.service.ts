import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModuleElement } from '../models/moduleElement.models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
 
  

  constructor(private http:HttpClient) { }

  public getElements(): Observable<ModuleElement[]> {
    return this.http.get<ModuleElement[]>(environment.backendHost + "/moduleElements");
  }
  getProfSchedule(idProf: number) {
    return this.http.get<ModuleElement[]>(environment.backendHost + "/schedules/teacher/" + idProf);
  }
   getClassSchedule(classeId: number) {
    return this.http.get<ModuleElement[]>(environment.backendHost + "/schedules/" + classeId);
  }
}
