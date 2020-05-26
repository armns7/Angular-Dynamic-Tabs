import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[AppScreen]',
})
export class ScreenDirective {
  constructor(public ViewContainerRef: ViewContainerRef) { }
}