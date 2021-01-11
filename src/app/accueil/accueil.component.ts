import { Component, OnInit } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
public itemFormation=[];
  constructor(private idb:IdbService) { 
   this.idb.createdatabase()
   this.itemFormation=this.idb.listeFormation();
  }
  ngOnInit() {
  
  }

}
