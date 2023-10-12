import {
  ApplicationRef,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() appTooltip = '';

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  @HostListener('mouseenter') onMouseEnter = (): void => {
    if (this.componentRef === null) {
      this.componentRef = this.viewContainerRef.createComponent(TooltipComponent)
      const [tooltipDOMElement] = (this.componentRef.hostView as EmbeddedViewRef<TooltipComponent>).rootNodes;
      document.body.appendChild(tooltipDOMElement);
      this.setTooltipComponentProperties()
    }
  };
  @HostListener('mouseleave') onMouseLeave = (): void => this.destroy();

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.appTooltip;
      const { left, right, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
