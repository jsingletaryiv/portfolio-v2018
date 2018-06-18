import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '@app/shared';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    CoreRoutingModule,
    FooterComponent,
    NavbarComponent
  ],
  providers: []
})
export class CoreModule {

  // CoreModule Import Guard - See AppModule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    } else {
      console.log('CoreModule Loaded!');
    }
  }
}
