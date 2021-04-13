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
