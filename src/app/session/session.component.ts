import { Component, OnInit } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { NgForm } from '@angular/forms';
import { session } from '../session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(private dbService:IdbService ) { }

  ngOnInit() {
  }
  onSubmit(sessionn:NgForm){
    let tabSession=[]
  tabSession.push(new session(sessionn.value.titre,sessionn.value.date_debut,sessionn.value.date_fin,sessionn.value.plannig))
                   console.log(tabSession);
    
  this.dbService.addSession(tabSession)
  alert("success")
  sessionn.reset()
}
}
