import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-v2-drawer',
  templateUrl: './v2-drawer.component.html',
})
export class V2DrawerComponent implements OnInit {
  @Input() isOpen = false;
  @Input() width = 400;
  @Input() position: 'left' | 'right' = 'right';

  @Output() closeDrawer = new EventEmitter();

  constructor() {}

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

  ngOnInit(): void {}
  close() {
    this.closeDrawer.emit();
  }
}
