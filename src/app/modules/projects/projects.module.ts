import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsPageComponent } from './pages/projects/projects-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsPageComponent]
})
export class ProjectsModule { }
