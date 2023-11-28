import { AfterContentInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements AfterContentInit{
  constructor(private elementRef: ElementRef) {}

  public contentValue = '';
  ngAfterContentInit(): void {
    this.contentValue = this.elementRef.nativeElement.textContent
  }

}
