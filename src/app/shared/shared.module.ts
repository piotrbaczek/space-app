import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceImageDirective } from './space-image.directive';
import { TickedPipe } from './ticked.pipe';

@NgModule({
  declarations: [SpaceImageDirective, TickedPipe],
  imports: [
    CommonModule
  ],
  exports: [SpaceImageDirective, TickedPipe]
})
export class SharedModule { }
