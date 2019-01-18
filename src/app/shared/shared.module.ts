import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { IconsModule } from './icons/icons.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    IconsModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    IconsModule,
    FooterComponent,
    HeaderComponent
  ]
})

export class SharedModule { }
