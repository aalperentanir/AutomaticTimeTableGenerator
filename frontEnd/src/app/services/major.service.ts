import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Major } from '../models/majors.models';
import { PageMajor } from '../models/profPage.models';
import {ConsoleLogger} from "@angular/compiler-cli";

@Injectable({
  providedIn: 'root'
})
export class MajorService {

   constructor(private http:HttpClient) { }
  public getAllMajors(): Observable<Major[]> {
    return this.http.get<Major[]>(`${environment.backendHost}/majors/all`);
  }
   public getMajors(page: number, size: number): Observable<PageMajor> {
    return this.http.get<PageMajor>(environment.backendHost + "/majors?page=" + page + "&size=" + size);
  }
  public searchMajors(keyword : string,page: number, size: number):Observable<PageMajor>{
    return this.http.get<PageMajor>(environment.backendHost+"/majors/search?keyword="+keyword+"&page=" + page + "&size=" + size)
  }
  public saveMajor(Major: Major):Observable<Major>{
    return this.http.post<Major>(environment.backendHost+"/majors",Major);
  }
  public updateMajor(id: number,Major: Major):Observable<Major>{
     console.log("Update f");
    return this.http.put<Major>(environment.backendHost+"/majors/"+id,Major);
  }
  public getMajor(id: number):Observable<Major>{
    return this.http.get<Major>(environment.backendHost+"/majors/"+id);
  }
  public deleteMajor(id: number): Observable<any>{
    return this.http.delete(environment.backendHost+"/majors/"+id);
  }
  public getSemsterByMajor(id: number):Observable<any>{
    return this.http.get(environment.backendHost+"/majors/"+id+"/semesters");
  }
}
