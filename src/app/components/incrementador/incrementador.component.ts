import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input() public progress: number = 50;
  @Input() public btnClass: string = 'btn-primary'
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  getPorcentaje(){
    return `${this.progress}%`;
  }

  cambiarValor(valor:number){
    if(this.progress >= 100 && valor >= 0){
      this.progress = 100;
      this.valorSalida.emit(100);
      return;
    } 

    if(this.progress <= 0 && valor < 0){
      this.progress = 0;
      this.valorSalida.emit(0);
      return;
    } 

    this.progress = this.progress + valor;
    this.valorSalida.emit(this.progress);
  }

  onChange(valor: number){
    if(valor >= 100){
      this.progress = 100;
    }else if(valor <= 0){
      this.progress = 0;
    }else{
      this.progress = valor;
    }
      this.valorSalida.emit(valor);
  }

}
