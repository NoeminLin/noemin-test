import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'navigation', component: NavigationComponent,
  }, {
    path: 'form', component: FormComponent,
  }, {
    path: 'table', component: TableComponent,
  }, {
    path: 'dashboard', component: DashboardComponent,
  }, {
    path: 'dragdrop', component: DragDropComponent,
  }, {
    path: '**', component: NavigationComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
