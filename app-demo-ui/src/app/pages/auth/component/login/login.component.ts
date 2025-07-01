import {Component, EventEmitter, Output} from '@angular/core';
import {UserInfo} from "../../model/user-info";
import {LoginMode} from "../../model/login-mode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    @Output()
    onSignIn = new EventEmitter<UserInfo>();
    public LoginMode = LoginMode;
    mode: LoginMode = LoginMode.SIGN_IN;

    login(user: UserInfo) {
        this.onSignIn.emit(user);
    }

    onRegistered(user: UserInfo) {
        this.onSignIn.emit(user);
    }

    cancelRegister() {
        this.mode = LoginMode.SIGN_IN;
    }

    switchToRegister() {
        this.mode = LoginMode.REGISTRATION;
    }



}
