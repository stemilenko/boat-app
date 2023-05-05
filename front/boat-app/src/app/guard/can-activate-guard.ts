import { ActivatedRouteSnapshot, type CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../service/user-service';
import { inject } from '@angular/core';
import { map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  const userService = inject(UserService);
  const router = inject(Router);

  return userService.isLoggedIn().pipe(
    map(v => {
      if(v){
        return true;
      }
      router.navigateByUrl('/unauthorized');
      return false;
    }),
    catchError(() => {
      router.navigateByUrl('/unauthorized');
      return of(false)
    })
  );

}
