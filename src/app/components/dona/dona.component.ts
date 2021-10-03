import { Component, Input, OnInit } from '@angular/core';
//External libraries
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() public title: string = "Sin título";
  @Input('labels') public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  // Doughnut
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public colors:Color[] = [
    {backgroundColor: ['#9e120e', '#ff5800', '#ffb304']}
  ]  

  constructor() { }

  ngOnInit(): void {
  }

}
