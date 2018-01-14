import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  open: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
