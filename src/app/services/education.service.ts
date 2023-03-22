import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url : string = environment.urlBD;

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllEductaion() : Observable<Education[]>{
    return this.httpClient.get<Education[]>(`${this.url}/education`)
  }

  addEducation(education : Education) : Observable<Education>{
    return this.httpClient.post<Education>(`${this.url}/education`, education);
  }

  deleteEducation(id : number) : Observable<Education>{
    return this.httpClient.delete<Education>(`${this.url}/education/${id}`);
  }

  editEducation(id : number, education : Education) : Observable<Education>{
    return this.httpClient.put<Education>(`${this.url}/education/${id}`, education);
  }
}
