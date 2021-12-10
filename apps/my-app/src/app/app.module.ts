import { ApplicationRef, NgModule, NgZone, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent, HelloComponentModule } from '@nxastro/hello';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const ngComponents: { [name: string]: Type<any> } = {
  'app-hello': HelloComponent
};

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HelloComponentModule
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private ngZone: NgZone) {}

  ngDoBootstrap(app: ApplicationRef) {
    (window as any).ngBootstrap = (cmp: string) => {
      const ngCmp = ngComponents[cmp];
      if (ngCmp) {
        this.ngZone.run(() => {
          app.bootstrap(ngCmp);
        });
      }
    }
  }
}
