import {Component, OnInit} from '@angular/core';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toasts: string[] = [];

  constructor(private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.toasts = this.toastService.getToasts();
  }
}
