import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IdbService } from '../services/idb.service';
import { formateurs } from '../formateurs';
import { formateur } from '../formateur';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  constructor(private idb:IdbService) { }

  ngOnInit() {
  }
  onSubmit(iformateur:NgForm){
    let tabformateur=[]
    tabformateur.push(new formateurs(iformateur.value.cin,iformateur.value.name,iformateur.value.prenom,iformateur.value.email,
      iformateur.value.password,iformateur.value.cv,iformateur.value.specialite,iformateur.value.tarifhorraire,iformateur.value.num_phone,
      iformateur.value.photo))
      console.log(tabformateur);
      
    this.idb.addforamteur(tabformateur)
     }

}
