import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthFormComponent} from "./component/auth-form/auth-form.component";
import {LoginComponent} from "./component/login/login.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ToastModule} from "primeng/toast";
import {AuthPageComponent} from "./component/auth-page/auth-page.component";
import {RegisterFormComponent} from "./component/register-form/register-form.component";
import {InputSwitchModule} from "primeng/inputswitch";
import {PasswordModule} from "primeng/password";
import {MessageService} from "primeng/api";



@NgModule({
    declarations: [
        AuthPageComponent,
        LoginComponent,
        AuthFormComponent,
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        RippleModule,
        InputGroupModule,
        InputGroupAddonModule,
        ToastModule,
        TranslateModule,
        InputSwitchModule,
        PasswordModule,

        AuthRoutingModule,
    ],
    providers: [
        MessageService
    ],
    exports: [
        LoginComponent
    ]
})
export class AuthModule { }
