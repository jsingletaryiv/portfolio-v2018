import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '@app/shared';

import { NavbarComponent } from './navbar/navbar.component';
import { ThemeService } from '@app/core/services/theme.service';
// TODO:: Generate a utils.module that will contain various
// directives to help facilitate System / Admin requests
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    ThemeService
  ],
  exports: [
    CommonModule,
    CoreRoutingModule,
    NavbarComponent
  ]
})

export class CoreModule {

  // Request current version of Angular
  public appVersion: string = environment.VERSION;

  // CoreModule Import Guard - See AppModule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');

    } else {
      console.log('CoreModule Loaded!');
      console.log('App Version: v' + this.appVersion);
    }
  }
}
