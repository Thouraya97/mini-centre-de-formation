import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor( private router: Router) { }
  get isLoggedIn() {

    return this.loggedIn.asObservable();
 

  }
  logout() {                            
    this.loggedIn.next(false);
    this.router.navigate(['/admin']);
  }
}
