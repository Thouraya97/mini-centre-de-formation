import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatComponent } from './candidat/candidat.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateformationComponent } from './createformation/createformation.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { ConnecterformateurComponent } from './connecterformateur/connecterformateur.component';
import { NavbarformateurComponent } from './navbarformateur/navbarformateur.component';
import { DetailsformationsComponent } from './detailsformations/detailsformations.component';
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component'
import { BsModalRef } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RechComponent } from './rech/rech.component';
import { AffecterFormateurComponent } from './affectessionformateur/affectessionformateur.component';
import { FormationsComponent } from './formations/formations.component';
import { RegistercandidatComponent } from './registercandidat/registercandidat.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatComponent,
    FormateurComponent,
    AccueilComponent,
    AdminComponent,
    CreateformationComponent,
    NavbaradminComponent,
    ConnecterformateurComponent,
    NavbarformateurComponent,
    DetailsformationsComponent,
    HomeComponent,
    SessionComponent,
    RechComponent,
    AffecterFormateurComponent,
    FormationsComponent,
    RegistercandidatComponent,
   

  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
