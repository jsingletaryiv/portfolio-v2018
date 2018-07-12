import { NgModule, Optional } from '@angular/core';
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
    CommonModule,
    MaterialModule,
    FooterComponent
  ]
})
export class SharedModule { }
