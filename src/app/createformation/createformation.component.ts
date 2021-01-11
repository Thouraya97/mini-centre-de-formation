import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IdbService } from '../services/idb.service';
import { formation } from '../formation';

@Component({
  selector: 'app-createformation',
  templateUrl: './createformation.component.html',
  styleUrls: ['./createformation.component.css']
})
export class CreateformationComponent implements OnInit {

  constructor(private idb:IdbService) { 
    let itemFormation=[]
    itemFormation.push(new formation("titre","desc",12,"plannig.pdf","debutant","motClee",6))
    console.log(itemFormation);
  }

  ngOnInit() {
  }
  public onSubmit(iformateur:NgForm){
    let itemFormation=[]
   itemFormation.push(new formation(iformateur.value.titre,iformateur.value.desc,iformateur.value.nbrh,iformateur.value.plannig,iformateur.value.niveau,iformateur.value.motClee))
  console.log(itemFormation);
  
    this.idb.addformation(itemFormation);

  }
}
