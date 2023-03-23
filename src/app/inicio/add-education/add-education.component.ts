import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  login : boolean = false;

  show : boolean = false;

  showFormEdit : boolean = false;
  idToShow : number;

  //Datos del formulario
  nombreEducacion : string;
  fechaInicio : number;
  fechaFinal : number;
  orientacion : string;

  listEducation : Education[] = [];

  constructor(
    private educationService : EducationService,
    private authService : AuthenticationService
  ) { }

  ngOnInit(): void {
    //verificar que el usuario este loggeado
    this.login = this.authService.isLogged();

    //cargar la lista de educacion
    this.getEducation();


  }



  //Mostrar el formulario para agregar una educacion
  showForm(){
    this.show = this.show ? false : true;
  }

  showFormToEdit(id : number){
    this.showFormEdit = this.showFormEdit ? false : true;
    this.idToShow = id;
  }


  //Funcion para obtener la lista de educacion mediante el metodo del servicio Education
  getEducation(){
    this.educationService.getAllEductaion().pipe().subscribe(data => this.listEducation = data);
  } 

  //Agregar una nueva educacion
  addEducation(event : Event, form : NgForm){
    event.preventDefault();
    //instanciar objeto con los datos del formulario
    let education = new Education(
      this.nombreEducacion,
      this.orientacion,
      this.fechaInicio,
      this.fechaFinal
    )

    //cargalos mediante el servicio
    this.educationService.addEducation(education).subscribe(
    data=>{
      //limpiar form
      Swal.fire(
        'Completado!',
        'Nueva educacion agregada!',
        'success'
      )
      form.reset()
      //cerrar el formulario
      this.show = false;
    },
    error => {
      Swal.fire(
        'Ha ocurrido un error!',
        'Verfica que lo datos esten bien ingresados... o intentalo otra vez!',
        'error'
      )
    }
    );
  }

  //Editar educacion
  editEducation(event : Event, form : NgForm, education : Education){
    event.preventDefault();

    this.educationService.editEducation(education.id, education).subscribe(
      data => { 
        Swal.fire(
          'Completado!',
          'Educacion editada exitosamente!',
          'success'
        )
        this.showFormEdit = false; 
      },
      error => { 
        Swal.fire(
          'Ha ocurrido un error!',
          'Verfica que lo datos esten bien ingresados o intentalo otra vez!',
          'error'
        )
        console.log(error); 
      }
    )
  }



  //Eliminar una educacion
  deleteEducation(id : number){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Estas a punto de borrar una educacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.educationService.deleteEducation(id)
        .subscribe(dato => {
          Swal.fire(
            'Borrado',
            'Borrado exitosamente. (refresque la página para ver resultados)',
            'success'
          )
        },
        err =>{
          Swal.fire(
            'No se pudo borrar!',
            "Intentalo otra vez",
            'error'
          )
        });

        location.reload();
      }
    })
  }


}
