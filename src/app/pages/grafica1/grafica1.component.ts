import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales2'];

  constructor() { }

  ngOnInit(): void {
  }

}
