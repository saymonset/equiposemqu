import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { EquipoPagessComponent } from './pages/equipos/equipos.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevoEquipoComponent } from './components/dialog/nuevo-equipo/nuevo-equipo.component';
import { EquiposPingComponent } from './components/equipos-ping/equipos-ping.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    SideMenuComponent,
    PedidosComponent,
    InventarioComponent,
    EquiposComponent,
    EquipoPagessComponent,
    NuevoEquipoComponent,
    EquiposPingComponent
  
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
