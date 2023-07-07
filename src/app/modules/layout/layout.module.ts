import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [
    NavComponent,
    SideComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    NavComponent,
    SideComponent
  ]
})
export class LayoutModule { }
