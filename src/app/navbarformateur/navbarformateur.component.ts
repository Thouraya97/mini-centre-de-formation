import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbarformateur',
  templateUrl: './navbarformateur.component.html',
  styleUrls: ['./navbarformateur.component.css']
})
export class NavbarformateurComponent implements OnInit {
  

  constructor(private route:Router,private router:ActivatedRoute) { }

  ngOnInit() {
 
  }
  onclick(){
    let email= this.router.snapshot.paramMap.get('email');
    this.route.navigate(["/formations",email])
  }
  
}
