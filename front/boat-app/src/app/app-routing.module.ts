import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { canActivateGuard } from './guard/can-activate-guard';

const routes: Routes = [
  {path: '', redirectTo: '/login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'boat-list', component: BoatListComponent, canActivate: [canActivateGuard]},
  {path: 'boat-details/:id', component: BoatDetailsComponent, canActivate: [canActivateGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule{
}
