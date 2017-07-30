import { Directive, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AuthenticateUserService } from '../services/authenticate-user.service';

@Directive({
  selector: '[permissions]',
  providers: [AuthenticateUserService]
})
export class PermissionsDirective implements OnInit, OnDestroy {
  @Input() permissions: Array<string>;
  user: any;
  subscription: any;

  constructor(public el: ElementRef, public authUserService: AuthenticateUserService) { }

  ngOnInit() {
    this.user = this.authUserService.getUser();
    this.check_permissions();
    this.subscription = this.authUserService.userChange$.subscribe(
      user => this.setUserJson(user));
  }

  setUserJson(user: Object) {
    this.user = user;
    this.check_permissions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  check_permissions() {
    let i, permit = false;
    if (this.permissions.indexOf(this.user.userType) >= 0)
    { 
      permit = true;
    }

    if (permit)
      this.el.nativeElement.hidden = false;
    else
      this.el.nativeElement.hidden = true;

    // if (write) {
    //   this.el.nativeElement.disabled = false;
    // }
    // else
    //   this.el.nativeElement.disabled = true;
  }

}
