import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    MaterialModule,
    FooterComponent,
    CommonModule
  ]
})
export class SharedModule { }
