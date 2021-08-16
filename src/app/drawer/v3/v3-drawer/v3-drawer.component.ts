import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-v3-drawer',
  templateUrl: './v3-drawer.component.html',
})
export class V3DrawerComponent implements OnInit {
  @Input() isOpen = false;
  @Input() width = 400;
  @Input() position: 'left' | 'right' = 'right';

  @Output() closeDrawer = new EventEmitter();
  constructor() {}

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
