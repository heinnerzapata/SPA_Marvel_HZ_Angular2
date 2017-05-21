import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';

@Component({
  selector : 'app',
  templateUrl : 'app/app.component.html',
  styleUrls: [ 'app/app.component.css' ]
  directives: [ HeaderComponent , FooterComponent ]
})

export class AppComponent{

}
