import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdbService } from '../services/idb.service';

@Component({
  selector: 'app-rech',
  templateUrl: './rech.component.html',
  styleUrls: ['./rech.component.css']
})
export class RechComponent implements OnInit {
search
searchItem=[]
  constructor(private route:ActivatedRoute,private dbservice:IdbService,private router:Router ) { 
    this.search=this.route.snapshot.paramMap.get('value')
    this.searchItem=this.dbservice.getSearchFormation(this.search)
  }
onClick(id){
  this.router.navigate(["/detailsformations",id])
}
  ngOnInit() {

  }

}
