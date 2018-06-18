import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxRoutingModule } from './sandbox-routing.module';

import { SandboxPageComponent } from './pages/sandbox/sandbox-page.component';

@NgModule({
  imports: [
    CommonModule,
    SandboxRoutingModule
  ],
  declarations: [SandboxPageComponent]
})
export class SandboxModule { }
