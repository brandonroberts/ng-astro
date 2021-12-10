import { NgModule } from '@angular/core';
import type { RenderOptions } from '@nguniversal/common/engine';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { HelloComponent } from './hello.component';

HelloComponent.forRender = (): RenderOptions => {
    return {
      document: '<app-hello></app-hello>',
      bootstrap: HelloServerComponentModule,
      inlineCriticalCss: true
    };
  }
  
  @NgModule({
    imports: [
      BrowserModule.withServerTransition({ appId: 'hello' }),
      ServerModule
    ],
    declarations: [
      HelloComponent
    ],
    bootstrap: [
      HelloComponent
    ]
  })
  export class HelloServerComponentModule {}
  
  export { HelloComponent as HelloServerComponent };