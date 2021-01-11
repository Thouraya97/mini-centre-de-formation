import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AdminserviceService } from './adminservice.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceauthService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.AdminserviceService.isLoggedIn         
      .pipe(
        take(1),                             
        map((isLoggedIn: boolean) => {         
          if (!isLoggedIn){
            this.router.navigate(['/admin']);  
            return false;
          }
          return true;
        })
      )
  }
  constructor(private AdminserviceService:AdminserviceService,private router:Router ) { }
}
