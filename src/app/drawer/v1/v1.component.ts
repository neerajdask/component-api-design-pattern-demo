import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
})
export class V1Component implements OnInit {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closed.emit();
  }
}
