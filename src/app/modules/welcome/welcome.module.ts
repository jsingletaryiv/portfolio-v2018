import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomePageComponent } from './pages/welcome/welcome-page.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomePageComponent]
})
export class WelcomeModule { }
