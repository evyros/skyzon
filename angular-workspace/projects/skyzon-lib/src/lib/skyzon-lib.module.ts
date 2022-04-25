import { NgModule } from '@angular/core';
import { SkyzonLibComponent } from './skyzon-lib.component';
import { DIRECTIVES } from './stencil-generated';



@NgModule({
  declarations: [
    SkyzonLibComponent,
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    SkyzonLibComponent,
    ...DIRECTIVES
  ]
})
export class SkyzonLibModule { }
