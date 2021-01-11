import { Component, OnInit } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { sessionFormation } from '../sessionFormation';
import { formateurs } from '../formateurs';

import { from } from 'rxjs';
import { sessionFormateur } from '../sessionFormateur';
import { session } from '../session';
@Component({
  selector: 'app-affectessionformateur',
  templateUrl: './affectessionformateur.component.html',
  styleUrls: ['./affectessionformateur.component.css']
})



export class AffecterFormateurComponent implements OnInit {
  tabFormateurs=[]
  email_formateur
  name_formateur
  tabSession=[]
  sessionSelected:any={}
  id_session
  titre_session
  modified
  modifiedSession
  tab=[]
  
  
    constructor(private dbService :IdbService) { 
      this.tabFormateurs=this.dbService.listesformateurs();
    
  this.tabSession=this.dbService.getsession()
    }
  
    onClick(){
        this.tab.push(new sessionFormateur(this.email_formateur,this.name_formateur,this.id_session,this.titre_session))
        console.log(this.tab);
         this.dbService.addSession_formateur(this.tab)
    }
    ngOnInit() {
  //console.log(this.dbService.countSessionFormateur(this.idSession));
   
    
    }
  
    onFormateurSelected(val:formateurs){
      this.customFunctionFormateurs(val)
  
  
    }
    onSessionSelected(val:session){
      this. customFunctionSession(val)
  return val  }
    customFunctionFormateurs(val:formateurs){
      this.modified="le formateur sélectionné est  "+val.nom+" "+val.prenom+" de specialité " +val.specialité
      this.email_formateur=val.email
      this.name_formateur=val.nom
    }
    customFunctionSession(val:session){
      this.modifiedSession="la session sélectionné est "+ val.titre+ " commanceé le "
                              +val.date_debut+" et fini le "+val.date_fin +val.plannig
      this.id_session=val.id
      this.titre_session=val.titre
    }}