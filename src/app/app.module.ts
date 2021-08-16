import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { V1Component } from './drawer/v1/v1.component';
import { V2Component } from './drawer/v2/v2.component';
import { V2DrawerComponent } from './drawer/v2/v2-drawer/v2-drawer.component';
import { V3Component } from './drawer/v3/v3.component';
import { V3DrawerComponent } from './drawer/v3/v3-drawer/v3-drawer.component';
import { V4Component } from './drawer/v4/v4.component';
import { V4DrawerComponent } from './drawer/v4/v4-drawer/v4-drawer.component';
import { V5Component } from './drawer/v5/v5.component';
import { V5DrawerComponent } from './drawer/v5/v5-drawer/v5-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    V1Component,
    V2Component,
    V2DrawerComponent,
    V3Component,
    V3DrawerComponent,
    V4Component,
    V4DrawerComponent,
    V5Component,
    V5DrawerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
