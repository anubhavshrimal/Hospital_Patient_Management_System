import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class AuthenticateUserService {

  private user = {
    'name': 'Anubhav',
    'userType': 'p'
  };
  userChange$: Observable<any>;
  private _observer: Observer<any>;

  constructor() {
    this.userChange$ = new Observable(observer =>
      this._observer = observer).share();
    // share() allows multiple subscribers
  }

  changeUser(user) {
    this.user = user;
    this._observer.next(user);
  }
  
  getUser() {
    return this.user;
  }

}
