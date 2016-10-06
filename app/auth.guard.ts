import { Injectable }                                                       from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Auth }                                                             from "./service/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: Auth, private router: Router){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.authenticated()) {
            console.log('AUTH GUARD PASSED');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['/']);
            return false;
        }
    }
}