import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-nopost',
  templateUrl: './nopost.component.html',
  styleUrls: ['./nopost.component.scss'],
})
export class NopostComponent implements OnInit {
  posts: User[] = [];

  constructor(private postSrv: ServiceService) {
    this.postSrv.recuperaPosts().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
