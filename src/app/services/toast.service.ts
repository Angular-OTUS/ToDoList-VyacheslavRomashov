import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts = new BehaviorSubject<string[]>([]);
  toasts$ = this.toasts.asObservable();

  showToast(toast: string) {
    this.toasts.value.push(toast);
    this.toasts.next(this.toasts.value);
    setTimeout(() => {
      this.toasts.value.shift();
      this.toasts.next(this.toasts.value);
    }, 3000);
  }

  getToasts(): string[] {
    return this.toasts.value;
  }
}
