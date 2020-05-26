import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[DynamicTab]',
})
export class DynamicTabDirective {
  constructor(public ViewContainerRef: ViewContainerRef) { }
}