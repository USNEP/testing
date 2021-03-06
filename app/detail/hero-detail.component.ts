import { Component, Input } from '@angular/core';
import { Hero } from '../services/hero';
@Component({
  selector: 'my-hero-detail',
  template: `
  <div> Details here ...........</div>
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
