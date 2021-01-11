import { Component, OnInit } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  email
  tabSession=[]
 
  constructor(private idb:IdbService , private route :ActivatedRoute) { 
   this.idb.createdatabase()
   this.email=this.route.snapshot.paramMap.get('email')
    console.log(this.email);
   this.tabSession=this.idb.getformationFormateur(this.email);
   console.log(this.tabSession);
   
    
    
  }
  

  ngOnInit() {
  }

}
