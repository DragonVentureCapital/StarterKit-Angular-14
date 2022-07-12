import { TablesComponent } from './tables/tables.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ExampleComponent } from './example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
    data: {
      breadcrumb: {
        title: 'Charts',
      },
    },
  },
  {
    path: 'tables',
    component: TablesComponent,
    data: {
      breadcrumb: {
        title: 'Tables',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
