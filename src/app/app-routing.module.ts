import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot  } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormateurComponent } from './formateur/formateur.component';
import { CandidatComponent } from './candidat/candidat.component';
import { AdminComponent } from './admin/admin.component';
import { CreateformationComponent } from './createformation/createformation.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { ConnecterformateurComponent } from './connecterformateur/connecterformateur.component';
import { NavbarformateurComponent } from './navbarformateur/navbarformateur.component';
import { DetailsformationsComponent } from './detailsformations/detailsformations.component';
import { ServiceauthService } from './serviceauth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RechComponent } from './rech/rech.component';
import { SessionComponent } from './session/session.component';
import { AffecterFormateurComponent } from './affectessionformateur/affectessionformateur.component';
import { FormationsComponent } from './formations/formations.component';
import { RegistercandidatComponent } from './registercandidat/registercandidat.component';


const routes: Routes = [

  {path:'home',component:HomeComponent} ,
  {path:'acceuil',component:AccueilComponent} ,
  {path:'formateur',component:FormateurComponent} ,
  {path:'candidat',component:CandidatComponent} ,
  {path:'admin',component:AdminComponent} ,
  {path:'createformation',component:CreateformationComponent} ,
  {path:'navbaradmin',component:NavbaradminComponent } ,
  {path:'connecterformateur',component:ConnecterformateurComponent} ,
  {path:'navbarformateur/:email',component:NavbarformateurComponent} ,
  {path:'detailsformations/:id',component:DetailsformationsComponent} ,
  {path:'rech/:value',component:RechComponent},
  {path:'addSession',component:SessionComponent},
  {path:'session',component:SessionComponent},
  {path:'formations/:email',component:FormationsComponent},
  {path:'register',component:RegistercandidatComponent},

  

  
  {path:'affect',component:AffecterFormateurComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
