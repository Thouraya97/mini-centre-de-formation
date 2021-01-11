import { Component, OnInit, ViewChild } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  private formSubmitAttempt: boolean;
  
  constructor(private idb:IdbService,private route:Router) {
  }
  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    console.log(email+ password);
   this.idb.getAdmin(email,password);
if(sessionStorage.sessionAdmin=="active"){
  
  
  //this.route.navigate(["/navbaradmin"]
    this.route.navigate(["/home"]

  )
}
this.formSubmitAttempt = true;          

}


}
 