import { Component } from '@angular/core';
import { SortNavComponent } from './sortnav/sortnav.component';

@Component({
  selector: 'home-component',
  templateUrl : 'app/views/home/home.component.html',
  styleUrls: ['app/views/home/home.component.css'],
  directives: [ SortNavComponent ]
})

export class HomeComponent{

}
