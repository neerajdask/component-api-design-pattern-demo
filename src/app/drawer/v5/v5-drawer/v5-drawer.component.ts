import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-v5-drawer',
  templateUrl: './v5-drawer.component.html',
  styleUrls: ['./v5-drawer.component.scss'],
  exportAs: 'drawerComp'
})
export class V5DrawerComponent implements OnInit {
  @Input() isOpen = false;
  @Input() width = 400;
  @Input() position: 'left' | 'right' = 'right';

  @Output() closeDrawer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // get drawerStyles() {
  //   const commonStyles = { width: `${this.width}px` };

  //   if (this.position === 'right') {
  //     return {
  //       ...commonStyles,
  //       right: `${this.isOpen ? 0 : -1 * this.width}px`,
  //     };
  //   } else {
  //     return {
  //       ...commonStyles,
  //       left: `${this.isOpen ? 0 : -1 * this.width}px`,
  //     };
  //   }
  // }

  close() {
    this.closeDrawer.emit();
  }
}
