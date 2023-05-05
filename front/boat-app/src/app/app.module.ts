import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MessagesComponent } from './messages/messages.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


@NgModule({
            declarations: [
              AppComponent,
              MessagesComponent,
              LoginPageComponent,
              BoatListComponent,
              BoatDetailsComponent,
              PageNotFoundComponent,
              UnauthorizedComponent
            ],
            imports: [
              BrowserModule,
              ReactiveFormsModule,
              AppRoutingModule,
              HttpClientModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule{
}
