import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}
}
fetch('../assets/db.json')
  .then((resp) => resp.json())
  .then((post) => {
    console.log(post);
  });
