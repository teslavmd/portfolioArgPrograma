import { Component, OnInit, Sanitizer } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillService } from '../skill/skill-cards/skill.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { SkillCard } from '../skill/skill-cards/skill-model';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  imgPre : string;
  nombreInput : string;
  nivel : number;
  loading : boolean;


  constructor(private skillService : SkillService, 
    private flashMessageService : FlashMessagesService,
    private routeService : Router
    ) { }

  ngOnInit(): void {
  }


  submitSkill(form : NgForm){

    this.loading = true;
    

    let card = new SkillCard(this.nombreInput, this.imgPre, this.nivel)
    console.log(this.imgPre);
    this.skillService.addSkill(card)
    .subscribe(dato => {
      this.routeService.navigate(['/skills']);
    });

    if(form.valid){
      Swal.fire(
        'Completado!',
        'Nueva habilidad Agregada!',
        'success'
      )
    }
    
    form.reset();
    this.imgPre = '';
    
   

    this.loading = false;
  }

  
  capturarArchivo(event : any){
    const imagen = event.target.files[0];
    this.extraerBase64(imagen).then((imagen : any) => {
      this.imgPre = imagen.base;
    })

    return this.imgPre;
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      reader.readAsDataURL($event);
      reader.onload = () =>{
        resolve({
  
          base: reader.result
        })
      };
      reader.onerror = error => {
        resolve({
          base : null
        })
      }
    } catch (err) {
      return null
    }
  });
    

}
