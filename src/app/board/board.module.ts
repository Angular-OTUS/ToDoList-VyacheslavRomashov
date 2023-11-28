import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board-component/board.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { BacklogModule } from '../backlog/backlog.module';


@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    BacklogModule,
  ],
})
export class BoardModule {
}
