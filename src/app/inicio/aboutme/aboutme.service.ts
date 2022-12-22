import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { TextoAboutMe } from './aboutme.model'


@Injectable()
export class AboutmeService{

    texto : TextoAboutMe;
    urlBD : string = "https://informal-zaneta-teslavmd.koyeb.app/api/argp/aboutme";
    //urlBD : string = "http://localhost:8080/api/argp/aboutme";
    constructor(private httpClient : HttpClient){}


    getInfoAbout(): Observable<TextoAboutMe>{
        return this.httpClient.get<TextoAboutMe>(`${this.urlBD}`);
    }   
    
    addInfoAbout(data : TextoAboutMe): Observable<TextoAboutMe>{
        return this.httpClient.put<TextoAboutMe>(`${this.urlBD}`, data);
    }
    


}