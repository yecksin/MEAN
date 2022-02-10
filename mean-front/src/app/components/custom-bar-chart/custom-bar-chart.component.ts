import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-custom-bar-chart',
  templateUrl: './custom-bar-chart.component.html',
  styleUrls: ['./custom-bar-chart.component.scss']
})
export class CustomBarChartComponent implements OnInit {
  // Doughnut
  @Input('title') titulo = 'Sin titulo';
  constructor(){

  }

  ngOnInit(): void {
    
  }
  public colors:any[]=[
    {backgroundColor: ['#fafafa']}
  ]

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],         
        backgroundColor: [
        '#eb5b5b', '#51d88e','#51a2d8'
    ] },
    ]
  };

}
