
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { routes } from './app.routes'



@NgModule({
   imports: [
     BrowserModule,
     RouterModule,
     HttpModule,
     routes
   ],
   declarations: [
      AppComponent
   ],
   providers: [],
   bootstrap: [ AppComponent ]
 })

 export class AppModule { }
