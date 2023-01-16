import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { InfoAboutMe } from './aboutme.model'


@Injectable()
export class AboutmeService{

    info : InfoAboutMe;
    urlBD : string = "https://informal-zaneta-teslavmd.koyeb.app/api/argp/aboutme";
    //urlBD : string = "http://localhost:8080/api/argp/aboutme";
    constructor(private httpClient : HttpClient){}


    getInfoAbout(): Observable<InfoAboutMe>{
        return this.httpClient.get<InfoAboutMe>(`${this.urlBD}`);
    }   
    
    addInfoAbout(data : InfoAboutMe): Observable<InfoAboutMe>{
        return this.httpClient.put<InfoAboutMe>(`${this.urlBD}`, data);
    }
    


}