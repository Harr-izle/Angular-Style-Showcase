import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]',
  standalone: true
})
export class HoverDirectiveDirective {

  constructor() { }

  @HostBinding('style.transform') transform: string = 'scale(1)';
  @HostBinding('style.transition') transition: string = 'transform 0.3s ease-in-out';

  @HostListener('mouseenter') onMouseEnter() {
    this.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.transform = 'scale(1)';
  }

}
