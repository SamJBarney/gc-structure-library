import { NgModule } from '@angular/core';
import { GCFooterComponent } from './gc-footer/gc-footer.component';
import { GCHeaderComponent } from './gc-header/gc-header.component';

@NgModule({
  declarations: [
    GCFooterComponent,
    GCHeaderComponent
  ],
  imports: [
  ],
  exports: [
    GCFooterComponent,
    GCHeaderComponent
  ]
})
export class GcStructureModule { }
