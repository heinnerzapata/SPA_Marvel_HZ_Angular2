import { Component } from '@angular/core';

@Component({
  selector : 'app',
  template : '<h1>{{saludo}}</h1>'
})

export class AppComponent{
  saludo : string;
  constructor(){
    this.saludo = "!!Hola angular HZ";
  }
}
