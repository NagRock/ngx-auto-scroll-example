import { Component } from '@angular/core';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [];
  currentItem = 0;

  constructor() {
    IntervalObservable.create(200).subscribe(() => {
      this.items.push(`Sample text: ${this.currentItem++}`)
    });
  }
}
