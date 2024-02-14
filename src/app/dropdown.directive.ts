import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
@Directive({
  selector: '[appDropdownHover]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showDropdown();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideDropdown();
  }

  private showDropdown() {
    const dropdownToggle = this.elRef.nativeElement.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
      this.renderer.addClass(dropdownToggle, 'show');
    }
  }

  private hideDropdown() {
    const dropdownToggle = this.elRef.nativeElement.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
      this.renderer.removeClass(dropdownToggle, 'show');
    }
  }
}
