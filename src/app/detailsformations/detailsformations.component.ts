import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdbService } from '../services/idb.service';
  import { from } from 'rxjs';
import { formation } from '../formation';
import { AccueilComponent } from '../accueil/accueil.component';
@Component({
  selector: 'app-detailsformations',
  templateUrl: './detailsformations.component.html',
  styleUrls: ['./detailsformations.component.css']
})
export class DetailsformationsComponent implements OnInit {
  @Input() formation:AccueilComponent;
  public itemFormation=[];
  constructor(private idb:IdbService, private route: ActivatedRoute) {
    this.idb.createdatabase()

  

  

   }
  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('id');
    this.itemFormation=this.idb.getOneformation(id)
    console.log(this.itemFormation);
    

    console.log(id)

  }
  
}
