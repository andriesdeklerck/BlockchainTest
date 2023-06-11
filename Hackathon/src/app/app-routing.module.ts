import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FindComponent } from './find/find.component';
import { BatteryComponent } from './battery/battery.component';
import { BatteryCyclesComponent } from './battery-cycles/battery-cycles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'battery/:id',
    component: BatteryComponent,
    title: 'Battery'
  },
  {
    path: 'create',
    component: CreateComponent,
    title: 'Create'
  },
  {
    path: 'find',
    component: FindComponent,
    title: 'Find'
  },
  {
    path: 'battery/cycles/:mainid',
    component: BatteryCyclesComponent,
    title: 'Cycles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
