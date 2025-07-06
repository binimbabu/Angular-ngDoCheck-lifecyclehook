Lifcycle hooks


NgDocheck



 NgDocheck is part of Angular's component lifecycle and is called during every change detection run, allowing developers to detect and act upon changes that Angular's default change detection might miss. NgDocheck is called after Angular runs its default change detection, On every change detection cycle, even if the component's inputs haven’t changed. ngDoCheck is typically used when: You want to check for changes in objects/arrays (since Angular's default change detection doesn't detect mutations to object properties or array contents).


We want to detect when a property inside an object (employee.name) changes, even if the object reference (employee) stays the same.


Complete example:

app.component.html

<p>Curent name : {{ employee.name }}</p>
<input type="text" [(ngModel)]="nameInput" />
<button (click)="changeName(nameInput)">Change employee name</button>


app.component.ts

import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  nameInput: any;
  previousName = '';
  employee: any = {
    name: 'Bini',
    age: 24,
  };
  ngDoCheck() {
    if (this.employee.name !== this.previousName) {
      this.previousName = this.employee.name;
    }
  }
  changeName(name: any) {
    this.employee.name = name;
  }
}
