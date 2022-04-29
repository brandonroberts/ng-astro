import '@angular/compiler';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import type { RenderOptions } from '@nguniversal/common/engine';

@Component({
  selector: 'app-hello',
  template: `
    <p>Hello from Angular!</p>

    <p *ngIf="show">help</p>

    <button (click)="toggle()">Toggle</button>
  `
})
export class HelloComponent {
  show = false;
  static forServer(): RenderOptions {
    return {
      document: `<${HelloComponent.selector}></${HelloComponent.selector}>`,
      bootstrap: HelloServerComponentModule
    };
  }
  
  static selector = 'app-hello';
  ngOnInit() {

  }

  toggle() {
    this.show = !this.show;
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HelloComponent
  ],
  exports: [
    HelloComponent
  ]
})
export class HelloComponentModule { }

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: HelloComponent.selector }),
    ServerModule,
    HelloComponentModule
  ],
  bootstrap: [
    HelloComponent
  ]
})
export class HelloServerComponentModule {}