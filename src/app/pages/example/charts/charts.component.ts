import { Component, OnInit } from '@angular/core';
import * as graphoptions from '../../../shared/data/chart/config';
import { ExampleService } from '../../../shared/services/example.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  public barChartsingle;
  public pieChart;
  public multiData;
  public single;

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.getBarChartSingle();
    this.getPieChart();
    this.getSingleChart();
    this.getMultiDataChart();
  }

  async getBarChartSingle() {
    this.barChartsingle = await this.exampleService
      .getBarChartSingleMock()
      .toPromise();
  }

  async getPieChart() {
    this.pieChart = await this.exampleService.getPieChartMock().toPromise();
  }

  async getSingleChart() {
    this.single = await this.exampleService.getSingleChartMock().toPromise();
  }

  async getMultiDataChart() {
    this.multiData = await this.exampleService
      .geMultiDataChartMock()
      .toPromise();
  }

  // Bar-chart options
  public barChartShowYAxis = graphoptions.barChartShowYAxis;
  public barChartShowXAxis = graphoptions.barChartShowXAxis;
  public barChartGradient = graphoptions.barChartGradient;
  public barChartShowLegend = graphoptions.barChartShowLegend;
  public barChartShowXAxisLabel = graphoptions.barChartShowXAxisLabel;
  public barChartXAxisLabel = graphoptions.barChartXAxisLabel;
  public barChartShowYAxisLabel = graphoptions.barChartShowYAxisLabel;
  public barChartYAxisLabel = graphoptions.barChartYAxisLabel;
  public barChartColorScheme = graphoptions.barChartColorScheme;
  public barChartshowGridLines = graphoptions.barChartshowGridLines;

  // pie-chart options
  public pieChartColorScheme = graphoptions.pieChartcolorScheme;
  public pieChartShowLabels = graphoptions.pieChartShowLabels;
  public pieChartGradient = graphoptions.pieChartGradient;
  public chartOptions = graphoptions.chartOptions;

  //Area-chart options
  public areaChartshowXAxis = graphoptions.areaChartshowXAxis;
  public areaChartshowYAxis = graphoptions.areaChartshowYAxis;
  public areaChartgradient = graphoptions.areaChartgradient;
  public areaChartshowXAxisLabel = graphoptions.areaChartshowXAxisLabel;
  public areaChartxAxisLabel = graphoptions.areaChartxAxisLabel;
  public areaChartshowYAxisLabel = graphoptions.areaChartshowYAxisLabel;
  public areaChartcolorScheme = graphoptions.areaChartcolorScheme;
  public lineChartcurve = graphoptions.lineChartcurve;
  public lineChartcurve1 = graphoptions.lineChartcurve1;

  public onSelect(e) {}
}
