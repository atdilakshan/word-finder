import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appWordFinder]',
})
export class WordFinderDirective {
  @Input() findText = '';
  originalHTML = '';

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue, firstChange } = changes['findText'];
    if (firstChange) {
      this.originalHTML = this.elementRef.nativeElement.innerHTML;
      return;
    }
    if (currentValue) {
      const regexp = new RegExp(`(${currentValue})`, 'gi');
      this.elementRef.nativeElement.innerHTML = this.originalHTML.replace(
        regexp,
        `<span style="background-color:yellow">\$1</span>`
      );
    } else {
      this.elementRef.nativeElement.innerHTML = this.originalHTML;
    }
  }
}
