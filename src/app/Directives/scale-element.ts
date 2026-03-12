import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScaleElement]',
})
export class ScaleElement {
  constructor(private e:ElementRef ) {
    // console.log(this.e.nativeElement);
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.e.nativeElement.style.transform ='scale(1.2)'
    this.e.nativeElement.style.transition ='all 0.5s ease-in-out'
  }
  @HostListener('mouseleave') onMouseLeave (){
    this.e.nativeElement.style.transform ='scale(1)'
    this.e.nativeElement.style.transition ='all 0.5s ease-in-out'
  }
}
