import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v4',
  templateUrl: './v4.component.html',
})
export class V4Component implements OnInit {
  isOpen = false
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.isOpen = false
  }

}
