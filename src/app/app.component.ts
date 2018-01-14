import { Component } from '@angular/core';

@Component({
  selector: 'sx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sport Express';
  openLogOutModal = false;

  logout() {
    console.log('You logged out!');
    this.openLogOutModal = false;
  }
}
