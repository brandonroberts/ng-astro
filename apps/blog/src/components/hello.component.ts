import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Hello from Angular!!</p>

    <p *ngIf="show">help</p>

    <button (click)="toggle()">Toggle</button>
  `
})
export class HelloComponent {
  show = false;
  
  ngOnInit() {

  }

  toggle() {
    this.show = !this.show;
  }
}
