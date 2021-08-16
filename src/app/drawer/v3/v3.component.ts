import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v3',
  templateUrl: './v3.component.html',
})
export class V3Component implements OnInit {
  isOpen = false;
  width= 400
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.isOpen = false;
  }

}
