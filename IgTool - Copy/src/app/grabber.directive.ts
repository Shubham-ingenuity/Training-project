import { Directive, ElementRef, Renderer, HostListener, ViewChild, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appGrabber]'
})
export class GrabberDirective implements AfterViewInit {

  @Input('renContainer') renEl: ElementRef;

  grabber = false;
  rowContainer: HTMLDivElement;
  rendererContainer: HTMLDivElement;
  eleContainer: HTMLDivElement;

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.rowContainer = document.querySelector('.subMainContainer');
    this.rendererContainer = document.querySelector('.renContainer');
    this.eleContainer = document.querySelector('.tmpContainer');
  }

  ngAfterViewInit() { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }

    let offsetRight = this.rowContainer.offsetWidth - (event.clientX - this.rowContainer.offsetLeft);
    console.log(offsetRight);
    console.log(this.rendererContainer);
    this.rendererContainer.style.flexBasis = (this.rowContainer.offsetWidth - offsetRight) + 'px';

  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  @HostListener('document:mousedown', ['$event'])
  onmousedown(event: MouseEvent) {
    this.grabber = true;
  }

}
