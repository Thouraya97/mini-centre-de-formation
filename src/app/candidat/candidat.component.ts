import { Component, OnInit, TemplateRef } from '@angular/core';

import { from } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IdbService } from '../services/idb.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {


  constructor(private idb:IdbService,private route:Router) { }

  ngOnInit() {
  }
  enregistrer(){
this.route.navigate(["/register"])
  }
  onSubmit(f:NgForm){
    const email = f.value.email;
    const password = f.value.password;
    console.log(email+ password);
   this.idb.getcandidat(email,password);
  }
}
