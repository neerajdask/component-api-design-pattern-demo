import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v5',
  templateUrl: './v5.component.html',
})
export class V5Component implements OnInit {
  isOpen = false;
  constructor() {}

  ngOnInit(): void {}
  close() {
    this.isOpen = false;
  }
}
