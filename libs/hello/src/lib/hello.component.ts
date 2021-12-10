import { Component } from '@angular/core';

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
  static forRender: any;
  ngOnInit() {

  }

  toggle() {
    this.show = !this.show;
  }
}

