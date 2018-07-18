import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
