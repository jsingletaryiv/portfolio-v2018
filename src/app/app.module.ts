import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule, ThemeService } from '@app/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
