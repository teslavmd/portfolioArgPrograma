import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InfoAboutMe } from './aboutme.model'


@Injectable()
export class AboutmeService{

    info : InfoAboutMe;
    urlBD : string = environment.urlBD;
    
    constructor(private httpClient : HttpClient){}


    getInfoAbout(): Observable<InfoAboutMe>{
        return this.httpClient.get<InfoAboutMe>(`${this.urlBD}/aboutme`);
    }   
    
    addInfoAbout(data : InfoAboutMe): Observable<InfoAboutMe>{
        return this.httpClient.put<InfoAboutMe>(`${this.urlBD}/aboutme`, data);
    }
    


}