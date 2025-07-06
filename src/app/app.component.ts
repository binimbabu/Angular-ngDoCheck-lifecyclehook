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
