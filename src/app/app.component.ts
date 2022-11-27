import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <app-hero></app-hero>
  <h1>Pytahgore Académie</h1>
  <app-footer></app-footer>`,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'ng-pythagore-app'
  ngOnInit() {
    console.log(this.title)
  }

  
}
