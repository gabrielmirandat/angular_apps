import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  url="http://localhost:5000"

  constructor( public http:Http ) {
  }

  getAll() {
    return this.http.get(this.url + '/users')
      .map(res => res.json());
  }

  get(id) {
    return this.http.get(this.url + '/users/' + id)
      .map(res => res.json());
  }

  add(user) {
    return this.http.post(this.url + '/users', user)
      .map(res => res.json());
  }

  update(id, user) {
    return this.http.put(this.url + '/users/' + id, user);
  }

  delete(id) {
    return this.http.delete(this.url + '/users/' + id);
  }
}
