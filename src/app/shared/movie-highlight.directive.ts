import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovieHighlight]'
})
export class MovieHighlightDirective {

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>
  ) { }

  @HostListener('mouseenter')
  onMouseEnter(): void{
    this.modify('red');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void{
    this.modify('black');
  }

  private modify(textColor: string): void{
    this.elementRef.nativeElement.style.color = textColor;
  }

}
