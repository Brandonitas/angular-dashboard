import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public progress: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  getPorcentaje(){
    return `${this.progress}%`;
  }

  cambiarValor(valor:number){
    if(this.progress >= 100 && valor >= 0){
      this.progress = 100;
      return;
    } 

    if(this.progress <= 0 && valor < 0){
      this.progress = 0;
      return;
    } 

    this.progress = this.progress + valor;
  }

}
