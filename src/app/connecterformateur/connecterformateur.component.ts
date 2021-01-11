import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IdbService } from '../services/idb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connecterformateur',
  templateUrl: './connecterformateur.component.html',
  styleUrls: ['./connecterformateur.component.css']
})
export class ConnecterformateurComponent implements OnInit {

  constructor(private idb:IdbService,private route:Router) { }

  ngOnInit() {
  }
  onSubmit(iformateur:NgForm){
    const email = iformateur.value.email;
    const password = iformateur.value.password;
    console.log(email+ password);
   this.idb.getformateur(email,password);
{
  
  this.route.navigate(["/navbarformateur",email])
}

  }
}
