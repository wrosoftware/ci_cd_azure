import { Component } from '@angular/core';
import {LayoutService} from "../../../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {UserInfo} from "../../model/user-info";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {


    constructor(private layoutService: LayoutService,
                private router: Router) {}

    get filledInput(): boolean {
        return this.layoutService.config().inputStyle === 'filled';
    }

    onSignIn(user: UserInfo) {
        this.router.navigateByUrl('/');
    }
}
