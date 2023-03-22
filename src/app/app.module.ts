//MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/***********/



//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './inicio/header/header.component';
import { NavbarComponent } from './inicio/navbar/navbar.component';
import { SkillComponent } from './inicio/skill/skill.component';
import { ProjectsComponent } from './inicio/projects/projects.component';
import { ProjectsCardsComponent } from './inicio/projects/projects-cards/projects-cards.component';
import { ContactComponent } from './inicio/contact/contact.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { SkillCardsComponent } from './inicio/skill/skill-cards/skill-cards.component';
import { FormularioProyectosComponent } from './inicio/formulario-proyectos/formulario-proyectos.component';
import { AboutmeComponent } from './inicio/aboutme/aboutme.component';
import { AddSkillComponent } from './inicio/add-skill/add-skill.component';
import { EditarProyectoComponent } from './inicio/editar-proyecto/editar-proyecto.component';
import { AddEducationComponent } from './inicio/add-education/add-education.component';
import { LoginComponent } from './inicio/login/login.component';
/***********/


//SERVICIOS
import { AboutmeService } from './services/aboutme.service';
import { SkillService } from './services/skill.service';
import { ProjectsService } from './services/projects.service';
import { InterceptorService } from './auth/interceptor.service';
import { AuthenticationService } from './auth/authentication.service';
/***********/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SkillComponent,
    ProjectsComponent,
    ProjectsCardsComponent,
    ContactComponent,
    FooterComponent,
    SkillCardsComponent,
    FormularioProyectosComponent,
    AboutmeComponent,
    AddSkillComponent,
    LoginComponent,
    EditarProyectoComponent,
    AddEducationComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    SkillService,
    ProjectsService,
    FlashMessagesService,
    AboutmeService,
    AuthenticationService,
    [{
      provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
      }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
