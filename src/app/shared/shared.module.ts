import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    ToastComponent,
  ],
  exports: [
    ButtonComponent,
    TooltipDirective,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
