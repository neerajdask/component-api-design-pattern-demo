import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
})
export class V2Component implements OnInit {
  openv2 = false;
  width = 200
  constructor() {}

  ngOnInit(): void {}
  closeV2Drawer() {
    this.openv2 = false;
  }
}
