import { Component, OnInit } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { candidat } from '../candidat';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registercandidat',
  templateUrl: './registercandidat.component.html',
  styleUrls: ['./registercandidat.component.css']
})
export class RegistercandidatComponent implements OnInit {

  constructor(private idb:IdbService) { }

  ngOnInit() {
  }
  
  onSubmit(icandidat:NgForm){
    let tabformateur=[]
    tabformateur.push(new candidat(icandidat.value.name,icandidat.value.prenom,icandidat.value.email,icandidat.value.cin,
      icandidat.value.photo,icandidat.value.cv,icandidat.value.password
     ))
      console.log(tabformateur);
      
    this.idb.addcandidat(tabformateur)
     }

}
