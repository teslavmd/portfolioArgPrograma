import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs";

import { Router } from "@angular/router";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn : "root"
})
export class AuthenticationService{

    url : string = environment.urlAuth;
    
    currentUserSubject : BehaviorSubject<any>;

    constructor(private httpClient : HttpClient, private router : Router){
        console.log("El servicio de autenticacion esta corriendo!")
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
    }


    login(credentials : any){
        console.log(credentials);
        return this.httpClient.post( `${this.url}`, credentials,{headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: "response"})
            .pipe(map(data => {

                sessionStorage.setItem("currentUser", JSON.stringify(data.body))
                this.currentUserSubject.next(data.body)
                return data;
            }))
           
    }

    get usuarioAuth(){
        return this.currentUserSubject.value;
    }


    isLogged(){
        if(this.currentUserSubject.value && this.currentUserSubject.value.jwtToken){
            return true;
        }else{
            return false;
        }
    }


    logOut(){
        sessionStorage.clear();
        location.reload();
    }

}