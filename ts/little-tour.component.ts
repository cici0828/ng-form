import { Component } from '@angular/core';
//(blur)="addHero(newHero.value); newHero.value='' "
@Component({
  selector: 'little-tour',
  template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value);newHero.value=''">
    <button (click)="addHero(newHero.value);newHero.value=''">Add</button>
    <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
  `
})
export class LittleTourComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}