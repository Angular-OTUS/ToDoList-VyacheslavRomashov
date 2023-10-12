import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
  ],
  exports: [
    ButtonComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
