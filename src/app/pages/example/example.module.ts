import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [ExampleComponent, ChartsComponent, TablesComponent],
  imports: [CommonModule, ExampleRoutingModule, NgxChartsModule, SharedModule],
})
export class ExampleModule {}
