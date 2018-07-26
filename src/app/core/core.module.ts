import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '@app/shared';
// Fontawesome / SVG core library
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// Icons to import
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent } from './navbar/navbar.component';
// TODO:: Generate a utils.module that will contain various
// directives to help facilitate System / Admin requests
import { environment } from '../../environments/environment';

// Add icons to the library for convenient access in other components
library.add(faEllipsisV, faFileDownload, faDownload, faToolbox);

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    CoreRoutingModule,
    FontAwesomeModule,
    NavbarComponent
  ],
  providers: []
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
