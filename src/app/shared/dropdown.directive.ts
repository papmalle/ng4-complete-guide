import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;       // @HostBinding('class') openDrop: string = 'open';

  ngOnInit(): void {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }


}

/*  @Input('appDropdown') defaultOpenValue: boolean = false;

  ngOnInit(): void {
    this.isOpen = this.defaultOpenValue;
  }
 si je veux donner une valleur par defaut au depart [appDropdown] = "true"
*/

/*

Closing the Dropdown From Anywhere
If you want that a dropdown can also be closed by a click anywhere outside
(which also means that a click on one dropdown closes any other one, btw.), replace the code of dropdown.
  directive.ts by this one (placing the listener not on the dropdown, but on the document):

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}








  */


