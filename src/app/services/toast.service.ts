import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts: string[] = [];

  showToast(toasts: string[]) {
    this.toasts.push(...toasts)
    setTimeout(() => {
      this.toasts.splice(0, this.toasts.length)
    }, 3000);
  }

  getToasts(): string[] {
    return this.toasts;
  }
}
