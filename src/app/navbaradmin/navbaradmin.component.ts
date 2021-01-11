import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  constructor(private adminservice:AdminserviceService) { }

  ngOnInit() { 
   this.isLoggedIn = this.adminservice.isLoggedIn;
   sessionStorage.sessionAdmin=="active"  }
  onLogout(){
    this.adminservice.logout();                    
  }
}
