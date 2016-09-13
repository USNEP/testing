import { Component, Input } from '@angular/core';
@Component({
  selector: 'topper',
  template: `
    <div >
      <h2>Topper!</h2>
    </div>
  `
})
export class TopperComponent {
  @Input()
  top: {false};
 }
