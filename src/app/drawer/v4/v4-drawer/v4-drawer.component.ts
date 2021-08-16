import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-v4-drawer',
  templateUrl: './v4-drawer.component.html',
  exportAs: 'drawerComp'
})
export class V4DrawerComponent implements OnInit {
  constructor() {}

  @Input() isOpen = false;
  @Input() width = 400;
  @Input() position: 'left' | 'right' = 'right';

  @Output() closeDrawer = new EventEmitter();

  ngOnInit(): void {}

  get drawerStyles() {
    const commonStyles = { width: `${this.width}px` };

    if (this.position === 'right') {
      return {
        ...commonStyles,
        right: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    } else {
      return {
        ...commonStyles,
        left: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    }
  }

  close() {
    this.closeDrawer.emit();
  }
}
