import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prof } from '../models/prof.models';
import {environment} from "../../environments/environment";
import { PageProf } from '../models/profPage.models';

@Injectable({
  providedIn: 'root'
})
export class ProfServiceService {

   constructor(private http:HttpClient) { }

   public getProfs(page: number, size: number): Observable<PageProf> {
    return this.http.get<PageProf>(environment.backendHost + "/teachers?page=" + page + "&size=" + size);
  }
  public searchProfs(keyword : string,page: number, size: number):Observable<PageProf>{
    return this.http.get<PageProf>(environment.backendHost+"/teachers/search?keyword="+keyword+"&page=" + page + "&size=" + size)
  }
  public saveProf(Prof: Prof):Observable<Prof>{
    return this.http.post<Prof>(environment.backendHost+"/teachers",Prof);
  }
  public updateProf(id: number,Prof: Prof):Observable<Prof>{
    return this.http.put<Prof>(environment.backendHost+"/teachers/"+id,Prof);
  }
  public getProf(id: number):Observable<Prof>{
    return this.http.get<Prof>(environment.backendHost+"/teachers/"+id);
  }
  public deleteProf(id: number): Observable<any>{
    return this.http.delete(environment.backendHost+"/teachers/"+id);
  }
}
