import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nombre : string;
  email : string;
  mensaje : string;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }


  submitContact(event : SubmitEvent, form : NgForm) :void {
  

    if(form.valid){
      this.sendEmail(
        this.nombre,
        this.email,
        this.mensaje
      ).subscribe(
        data => {
          data;
        }
      )
      form.reset();
    }
  }


  sendEmail(
    nombre : string,
    email : string,
    mensaje : string
  ):Observable<any>{

    let data = {
      nombre,
      email,
      mensaje
    }


    return this.http.post("https://formspree.io/f/mlekrvzk", JSON.stringify(data), {responseType : "arraybuffer"}).pipe();
  }


}
 