import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-activepost',
  templateUrl: './activepost.component.html',
  styleUrls: ['./activepost.component.scss'],
})
export class ActivepostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

class activepost implements User {
  id: number;
  title: string;
  body: string;
  active: boolean;
  constructor(_title: string, _body: string, _active: boolean, _id: number) {
    this.id = _id;
    this.title = _title;
    this.body = _body;
    this.active = _active;
  }
  isactive() {
    return this.active;
  }
}
