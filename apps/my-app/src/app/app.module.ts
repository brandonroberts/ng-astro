import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from '@nxastro/hello';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HelloComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {

  ngDoBootstrap(app: ApplicationRef) {
    const hello = document.querySelector('app-hello');
    if (hello) {
      app.bootstrap(HelloComponent);
    }
  }
}
