import { ApplicationRef, NgModule, NgZone, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent, HelloComponentModule } from '@nxastro/hello';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const ngComponents: { [name: string]: Type<any> } = {
  [HelloComponent.selector]: HelloComponent
};

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HelloComponentModule
  ]
})
export class AppModule {
  constructor(private ngZone: NgZone) {}

  ngDoBootstrap(app: ApplicationRef) {
    (window as any).ngBootstrap = ({ selector, id }: { selector: string, id: string}) => {
      const ngCmp = ngComponents[selector];
      const els = document.querySelectorAll(`[uid="${id}"]`);

      if (ngCmp && els.length > 0) {
        els.forEach(el => {
          this.ngZone.run(() => {
            app.bootstrap(ngCmp, el || selector);
          });
        })
      }
    }
  }
}
